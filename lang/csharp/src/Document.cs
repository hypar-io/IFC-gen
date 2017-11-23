using Antlr4.Runtime;
using Antlr4.Runtime.Tree;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Transactions;
using System.Collections.Generic;

namespace IFC4
{
	public abstract class STEPError
	{
		protected int currId;

		public virtual string Message
		{
			get{return $"There was an error reading the STEP file at Id, {currId}.";}
		}

		public STEPError(int currId)
		{
			this.currId = currId;
		}
	}

	/// <summary>
	/// MissingIdError is generated when a STEP file references an id that does not exist.
	/// </summary>
	public class MissingIdError : STEPError
	{
		private int missingId;
		public override string Message
		{
			get{return $"Id {missingId}, referenced in constructor, {currId}, could not be found in the file.";}
		}

		public MissingIdError(int id, int missingId):base(id)
		{
			this.missingId = missingId;
		}
	}

	/// <summary>
	/// Document provides a container for instances of BaseIfc.
	/// </summary>
	public class Document{

		private IStorageProvider storage;

		public Document(IStorageProvider storage)
		{
			this.storage = storage;
		}

		/// <summary>
		/// Create a Model given a STEP file.
		/// </summary>
		/// <param name="STEPfilePath">The path to the STEP file.</param>
		/// <returns>A Model.</returns>
		/// <exception cref="FileNotFoundException">The specified file path does not exist.</exception>
		public Document(string STEPfilePath, IStorageProvider storage, out IList<STEPError> errors)
		{
			if(!File.Exists(STEPfilePath))
			{
				throw new FileNotFoundException($"The specified IFC STEP file does not exist: {STEPfilePath}.");
			}
			
			this.storage = storage;

			using (FileStream fs = new FileStream(STEPfilePath, FileMode.Open))
			{
				var input = new AntlrInputStream(fs);
				var lexer = new STEP.STEPLexer(input);
				var tokens = new CommonTokenStream(lexer);

				var parser = new STEP.STEPParser(tokens);
				parser.BuildParseTree = true;

				var tree = parser.file();
				var walker = new ParseTreeWalker();
				
				var listener = new STEP.STEPListener();
				walker.Walk(listener, tree);

				var err = new List<STEPError>();
				foreach(var data in listener.InstanceData)
				{
					if(data.Value.ConstructedGuid != null && storage.InstanceById(data.Value.ConstructedGuid) != null)
					{
						// Instance may have been previously constructed as the result
						// of another construction.
						continue;
					}
					
					var instance = ConstructRecursive(data.Value, listener.InstanceData, data.Key, err);
					storage.AddInstance(instance);
				}
				errors = err;
			}
		}

		/// <summary>
		/// Recursively construct instances provided instance data.
		/// Construction is recursive because the instance data my include other
		/// instance data or id references to instances which have not yet been
		/// constructed.
		/// </summary>
		/// <param name="data">The instance data from which to construct the instance.</param>
		/// <param name="instanceDataMap">The dictionary containing instance data gathered from the parser.</param>
		/// <param name="model">The Model in which constructed instances will be stored.</param>
		/// <returns></returns>
		private BaseIfc ConstructRecursive(STEP.InstanceData data, Dictionary<int,STEP.InstanceData> instanceDataMap, int currLine, IList<STEPError> errors)
		{		
			Debug.WriteLine($"{currLine},{data.Id} : Constructing type {data.Type.Name} with parameters [{string.Join(",",data.Parameters)}]");
	
			for(var i=data.Parameters.Count()-1; i>=0; i--)
			{
				var instData = data.Parameters[i] as STEP.InstanceData;
				if(instData != null)
				{
					var subInstance = ConstructRecursive(instData, instanceDataMap, currLine, errors);
					data.Parameters[i] = subInstance;
					continue;
				}

				var stepId = data.Parameters[i] as STEP.STEPId;
				if(stepId != null)
				{
					if(instanceDataMap.ContainsKey(stepId.Value))
					{
						var guid = instanceDataMap[stepId.Value].ConstructedGuid;
						var existingInst = storage.InstanceById(guid);
						if(existingInst != null)
						{
							data.Parameters[i] = existingInst;
							continue;
						}
					}
					else
					{
						// A missing identifier results in an error.
						// set the data to null;
						errors.Add(new MissingIdError(currLine, stepId.Value));
						data.Parameters[i] = null;
						continue;
					}

					var subInstance = ConstructRecursive(instanceDataMap[stepId.Value], instanceDataMap, currLine, errors);
					data.Parameters[i] = subInstance;
					continue;
				}

				var list = data.Parameters[i] as List<object>;
				if(list != null)
				{
					// The parameters will have been stored in a List<object> during parsing.
					// We need to create a List<T> where T is the type expected by the constructor
					// in the STEP file.
					var listType = typeof(List<>);
					var instanceType = data.Constructor.GetParameters()[i].ParameterType.GetGenericArguments()[0];
					var constructedListType = listType.MakeGenericType(instanceType);
					var subInstances = (IList)Activator.CreateInstance(constructedListType);

					if(!list.Any())
					{
						// Return our newly type empty list.
						data.Parameters[i] = subInstances;
						continue;
					}

					foreach(var item in list)
					{
						if(item is STEP.STEPId)
						{
							var id = item as STEP.STEPId;
							var subInstance = ConstructRecursive(instanceDataMap[id.Value], instanceDataMap, currLine, errors);

							// The object must be converted to the type expected in the list
							// for Select types, this will be a recursive build of the base select type.
							var convert = Convert(instanceType, subInstance);
							subInstances.Add(convert);
						}
						else if(item is STEP.InstanceData)
						{
							var subInstance = ConstructRecursive((STEP.InstanceData)item, instanceDataMap, currLine, errors);
							var convert = Convert(instanceType, subInstance);
							subInstances.Add(convert);
						}
						else
						{
							var subInstance = item;
							var convert = Convert(instanceType, subInstance);
							subInstances.Add(convert);
						}
					}
					// Replace the list of STEPId with a list of instance references.
					data.Parameters[i] = subInstances;
				}
			}

			// Do one final pass on all parameters to ensure
			// that they are of the correct type.
			for(var i=data.Parameters.Count-1; i>=0; i--)
			{
				if(data.Parameters[i] == null)
				{
					continue;
				}
				
				var pType = data.Parameters[i].GetType();
				var expectedType = data.Constructor.GetParameters()[i].ParameterType;
				
				data.Parameters[i] = Convert(expectedType, data.Parameters[i]);
			}

			// Construct the instance, assuming that all required sub-instances
			// have already been constructed.
			var instance = (BaseIfc)data.Constructor.Invoke(data.Parameters.ToArray());
			
			if(instanceDataMap.ContainsKey(data.Id))
			{
				// We'll only get here if the instance is not being constructed
				// as a sub-instance.
				instanceDataMap[data.Id].ConstructedGuid = instance.Id;
			}
			
			Debug.WriteLine($"{currLine},{data.Id} : Constructed type {data.Type.Name} with parameters [{string.Join(",",data.Parameters)}]");

			return instance;
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="expectedType"></param>
		/// <param name="value"></param>
		/// <returns></returns>
		private static object Convert(Type expectedType, object value)
		{
			// Bail out immediately if a direct cast is available.
			if(expectedType.IsAssignableFrom(value.GetType()))
			{
				return value;
			}

			var converter = TypeDescriptor.GetConverter(expectedType);
			if(converter != null && converter.CanConvertFrom(value.GetType()))
			{
				return converter.ConvertFrom(value);
			}
			else
			{
				throw new Exception($"There was no type converter available to convert from {value.GetType()} to {expectedType}.");
			}
		}

				/// <summary>
		/// Serialize the model to JSON.
		/// </summary>
		/// <returns>A string representing the model serialized to JSON. The string will be indented and include type references.</returns>
		public string ToJSON()
		{
			var settings = new JsonSerializerSettings(){
				Formatting = Formatting.Indented,
				TypeNameHandling = TypeNameHandling.Objects
			};
			var json = JsonConvert.SerializeObject(this, settings);
			return json;
		}

		/// <summary>
		/// Serialize the model to a DOT graph notation.
		/// </summary>
		/// <returns>A string representing the model serialized in DOT notation.</returns>
		public string ToDOT()
		{
			var relationships = storage.AllInstancesDerivedFromType<IfcRelationship>();
			var visited = new List<Guid>();	 // Ids of visited nodes;
			
			var relations = new StringBuilder();
			foreach(var r in relationships)
			{
				var rType = r.GetType();
				foreach(var p in r.GetType().GetProperties().Where(p=>p.DeclaringType == r.GetType()))
				{
					var pVal = p.GetValue(r);
					if(pVal is IList && pVal.GetType().IsGenericType)
					{
						var vs = (IList)pVal;
						foreach(BaseIfc v in vs)
						{	
							relations.AppendLine($"\t\"{r.Id} : {rType.Name}\" -- \"{v.Id} : {v.GetType().Name}\"");
						}
					}
					else if(pVal is BaseIfc)
					{
						var v = (BaseIfc)pVal;
						relations.AppendLine($"\t\"{r.Id} : {rType.Name}\" -- \"{v.Id} : {v.GetType().Name}\"");
					}
					else if(pVal == null)
					{
						relations.AppendLine($"\t\"{r.Id} : {rType.Name}\" -- \"null\"");
					}
				}
			}
			string graph =
$@"graph model{{
	rankdir=LR
	node [shape=box];
{relations.ToString()}
}}";
			return graph;
		}

		public IEnumerable<T> AllInstanceOfType<T>(){
			return storage.AllInstancesOfType<T>();
		}

		public IEnumerable<BaseIfc> AllInstancesDerivedFromType<T>(){
			return storage.AllInstancesDerivedFromType<T>();
		}

		public BaseIfc InstanceById(Guid id){
			return storage.InstanceById(id);
		}

		public IfcProject AddProject(string name, string description){
			var p = new IfcProject(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));
			p.Name = name;
			p.Description = description;
			storage.AddInstance(p);
			return p;
		}

		public IfcSite AddSite(IfcProject project, string name="", string description=""){
			var s = new IfcSite(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));
			s.Name = name;
			s.Description = description;
			storage.AddInstance(s);
			CreateAggregationRelationship(project, s);
			return s;
		}

		public bool RemoveSite(Guid id){
			var s = storage.InstanceById(id);
			if(s == null){
				return false;
			}
			storage.RemoveInstance(id);
			RemoveAggregationRelationships(s);
			return true;
		}

		public IfcBuilding AddBuilding(IfcSite site, string name="", string description=""){
			var b = new IfcBuilding(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));
			b.Name = name;
			b.Description = description;
            storage.AddInstance(b);
			CreateAggregationRelationship(site, b);
			return b;
        }

        public void RemoveBuilding(IStorageProvider storage, Guid id, bool delete=false){
            var i = storage.InstanceById(id);
            storage.RemoveInstance(i.Id);
        }

		public IfcBuildingStorey AddBuildingStorey(IfcBuilding building, double elevation, string name=""){
			var s = new IfcBuildingStorey(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));
			s.Elevation = elevation;
			s.Name = name;
			storage.AddInstance(s);
			CreateAggregationRelationship(building, s);
			return s;
		}

		public IfcBuildingElementProxy AddBuildingElement(IfcBuildingStorey storey, string name="",string description=""){
			var e = new IfcBuildingElementProxy(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));
			e.Name = name;
			e.Description = description;
			storage.AddInstance(e);
			CreateAggregationRelationship(storey, e);
			return e;
		}

		/*public AddPropertySet(IfcBuildingElementProxy element, List<IfcProperty> properties){
			var ps = new IfcPropertySet(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()),properties);
			var def = new IfcPropertySetDefinition(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));
			var test = new IfcPropertySetDefinitionSelect()
			var r = new IfcRelDefinesByProperties(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()), new List<IfcObjectDefinition>{element},);
		}*/

		private void CreateAggregationRelationship(IfcObjectDefinition from, IfcObjectDefinition to){
			var r = new IfcRelAggregates(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()),from, new List<IfcObjectDefinition>{to});
			from.Decomposes.Add(r);
			storage.AddInstance(r);
		}

		private void RemoveAggregationRelationships(BaseIfc obj){
			var relationships = storage.AllInstancesOfType<IfcRelAggregates>().Where(r=>r.RelatedObjects.Contains(obj)).ToList();
			for(var i=relationships.Count()-1; i>=0; i--){
				storage.RemoveInstance(relationships[i].Id);
			}
		}
	}

	/// <summary>
	/// LocalStorageProvider provides an in memory implementation of IStorageProvider.
	/// </summary>
	public class LocalStorageProvider : IStorageProvider
	{
		private Dictionary<Guid, BaseIfc> instances = new Dictionary<Guid, BaseIfc>();

		public event Action<Guid> InstanceAdded;
		protected virtual void OnInstanceAdded(Guid id){
			if(InstanceAdded != null){
				InstanceAdded(id);
			}
		}

		public event Action<Guid> InstanceRemoved;
		protected virtual void OnInstanceRemoved(Guid id){
			if(InstanceRemoved != null){
				InstanceRemoved(id);
			}
		}

		public event Action<Guid> InstanceUpdated;
		protected virtual void OnInstanceUpdated(Guid id){
			if(InstanceUpdated != null){
				InstanceUpdated(id);
			}
		}

		/// <summary>
		/// Add an instance to the model.
		/// </summary>
		/// <param name="instance">The instance to add to the Model.</param>
		/// <exception cref="DuplicateInstanceException">Another instance already exists in the model with the same id.</exception>
		public void AddInstance(BaseIfc instance)
		{
			if(instances.ContainsKey(instance.Id))
			{
				throw new DuplicateInstanceException(instance.Id);
			}

			instances.Add(instance.Id, instance);
		}

		/// <summary>
		/// Remove an instance from the model.
		/// </summary>
		/// <param name="id"></param>
		/// <exception cref="InstanceNotFoundException">The specified instance does not exist in the model.</exception>
		public void RemoveInstance(Guid id)
		{
			if(!instances.ContainsKey(id))
			{
				throw new InstanceNotFoundException(id);
			}

			instances.Remove(id);
		}

		/// <summary>
		/// Finds an instance in the model, given its unique identifier.
		/// </summary>
		/// <param name="id">The unique id of the instance to find.</param>
		/// <returns>An BaseIfc instance or null if no instance can be found with the provided id.</returns>
		public BaseIfc InstanceById(Guid id)
		{
			if(instances.ContainsKey(id))
			{
				return instances[id];
			}
			
			return null;
		}

		/// <summary>
		/// Find all instances of type T in the model.
		/// </summary>
		/// <returns>A collection of objects whose type is T.</returns>
		public IEnumerable<T> AllInstancesOfType<T>()
		{
			return instances.Values.OfType<T>();
		}

		/// <summary>
		/// Find all instances derived from type T in the model.
		/// </summary>
		/// <returns>A collection of objects whose types are derived from T.</returns>
		public IEnumerable<BaseIfc> AllInstancesDerivedFromType<T>()
		{
			return instances.Where(i=>typeof(T).IsAssignableFrom(i.Value.GetType())).Select(e=>e.Value);
		}

		public void UpdateInstance(BaseIfc instance){
			throw new NotImplementedException();
		}
	}
}