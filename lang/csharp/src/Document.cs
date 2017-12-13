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
using IFC4.Storage;

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
        /// Serialize the model to STEP.
        /// </summary>
        /// <param name="filePath">The path to the resulting STEP file.</param>
        /// <returns>A string representing the model serialized to STEP.</returns>
        public string ToSTEP(string filePath)
        {
			var sw = new Stopwatch();
			sw.Start();

			var builder = new StringBuilder();
			builder.AppendLine(Begin(filePath));

			var index = 1;
			foreach(var instance in storage.Instances.Values)
			{
				instance.StepId = index;
				index++;
			}

            foreach (var instance in storage.Instances.Values)
            {
                var instanceValue = instance.ToSTEP();
				builder.AppendLine(instanceValue);
            }

			builder.Append(End());

			sw.Stop();
			Console.WriteLine($"{sw.Elapsed} for serializing Document to STEP.");
			
            return builder.ToString();
        }

        private string Begin(string filePath)
        {
			var project = this.AllInstanceOfType<IfcProject>().FirstOrDefault();

            return $@"
ISO-10303-21;
HEADER;
FILE_DESCRIPTION(
	('ViewDefinition [CoordinationView]'),
	'2;1');
FILE_NAME(
    '{filePath}',
    '{DateTime.Now.ToString("yyyy-MM-ddTHH:MM:ss")}',
    ('{System.Environment.UserName}'),
    ('{project.OwnerHistory.OwningUser.TheOrganization.Name}'),
    'IFC-dotnet',
    '{typeof(Document).Assembly.GetName().Version}',
	'None');
FILE_SCHEMA (('IFC4'));
ENDSEC;
DATA;";
        }

        private string End() { 
			return $@"ENDSEC;
END-ISO-10303-21;"; 
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
				var sw = new Stopwatch();
				sw.Start();

				var input = new AntlrInputStream(fs);
				var lexer = new STEP.STEPLexer(input);
				var tokens = new CommonTokenStream(lexer);

				var parser = new STEP.STEPParser(tokens);
				parser.BuildParseTree = true;

				var tree = parser.file();
				var walker = new ParseTreeWalker();
				
				var listener = new STEP.STEPListener();
				walker.Walk(listener, tree);

				sw.Stop();
				Console.WriteLine($"{sw.Elapsed} for parsing STEP file.");
				sw.Reset();

				sw.Start();
				var err = new List<STEPError>();
				foreach(var data in listener.InstanceData)
				{
					if(listener.InstanceData[data.Key].ConstructedInstance != null)
					{
						// Instance may have been previously constructed as the result
						// of another construction.
						continue;
					}
					
					ConstructAndStoreInstance(data.Value, listener.InstanceData, data.Key, err, 0);
				}
				
				// Transfer the constructed instances to storage.
				foreach(var data in listener.InstanceData)
				{
					storage.AddInstance((BaseIfc)data.Value.ConstructedInstance);
				}

				sw.Stop();
				Console.WriteLine($"{sw.Elapsed} for creating instances.");

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
		/// <param name="instances">The dictionary containing instance data gathered from the parser.</param>
		/// <param name="model">The Model in which constructed instances will be stored.</param>
		/// <returns></returns>
		private static object ConstructAndStoreInstance(STEP.InstanceData data, Dictionary<int,STEP.InstanceData> instances, int currLine, IList<STEPError> errors, int level)
		{
			var indent = string.Join("",Enumerable.Repeat("\t",level));

			//Console.WriteLine($"{indent}{currLine},{data.Id} : Constructing type {data.Type.Name} with parameters [{string.Join(",",data.Parameters)}]");

			for(var i=0; i<data.Parameters.Count(); i++)
			{
				if(data.Parameters[i] is STEP.InstanceData)
				{
					data.Parameters[i] = ConstructAndStoreInstance((STEP.InstanceData)data.Parameters[i], instances, currLine, errors, level);
				}
				else if(data.Parameters[i] is STEP.STEPId)
				{
					var stepId = data.Parameters[i] as STEP.STEPId;

					// The instance has already been constructed.
					// Use the id to look it up.
					if(instances.ContainsKey(stepId.Value))
					{
						if(instances[stepId.Value].ConstructedInstance != null)
						{
							//Console.WriteLine($"{indent}Using pre-created instance {stepId.Value}");
							data.Parameters[i] = instances[stepId.Value].ConstructedInstance;
							continue;
						}
					}
					// The instance's id cannot be found in the map.
					// Log an error and set the parameter value to null.
					else
					{
						errors.Add(new MissingIdError(currLine, stepId.Value));
						data.Parameters[i] = null;
						continue;
					}

					data.Parameters[i] = ConstructAndStoreInstance(instances[stepId.Value], instances, currLine, errors, level);
				}
				else if(data.Parameters[i] is List<object>)
				{
					var list = data.Parameters[i] as List<object>;

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

							// Do a check for an existing instance with this id.
							if(instances.ContainsKey(id.Value))
							{
								if(instances[id.Value].ConstructedInstance != null)
								{
									var existing = Convert(instanceType, instances[id.Value].ConstructedInstance);
									subInstances.Add(existing);
									continue;
								}
							}
							var subInstance = ConstructAndStoreInstance(instances[id.Value], instances, currLine, errors, level);

							// The object must be converted to the type expected in the list
							// for Select types, this will be a recursive build of the base select type.
							var convert = Convert(instanceType, subInstance);
							subInstances.Add(convert);
						}
						else if(item is STEP.InstanceData)
						{	
							var subInstance = ConstructAndStoreInstance((STEP.InstanceData)item, instances, currLine, errors, level);
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
			for(var i=0; i<data.Parameters.Count(); i++)
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
			var instance = data.Constructor.Invoke(data.Parameters.ToArray()) as BaseIfc;

			if(instance == null){
				// A null instance here means that the instance was not BaseIfc.
				// This is most likely an inline constructor. We don't store these
				// and simply return.
				return instance;
			}

			//Console.WriteLine($"Setting instanceDataMap[{data.Id}] constructed instance as {instance.Id} for type {instance.GetType().Name}.");
			instances[data.Id].ConstructedInstance = instance;

			return instance;
		}

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
			var json = JsonConvert.SerializeObject(this.storage, settings);
			return json;
		}

		/// <summary>
		/// Serialize the document's relationships to a DOT graph notation.
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

		/*public IfcPropertySet AddPropertySet(IfcBuildingElementProxy element, List<IfcProperty> properties){
			var ps = new IfcPropertySet(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()),properties);
			var def = new IfcPropertySetDefinition(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));
			var test = new IfcPropertySetDefinitionSelect();
			//var r = new IfcRelDefinesByProperties(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()), new List<IfcObjectDefinition>{element},);
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
}