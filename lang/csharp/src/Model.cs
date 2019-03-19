using Antlr4.Runtime;
using Antlr4.Runtime.Tree;
using Newtonsoft.Json;
using STEP;
using System;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Collections.Generic;
using IFC.Storage;

namespace IFC
{
    /// <summary>
    /// A Model contains a number of Elements.
    /// </summary>
    public class Model : IInstanceQuery
    {
        private IDictionary<Guid, BaseIfc>  storage;
        private const string APPNAME = "IFC-dotnet";

        public IEnumerable<BaseIfc> AllInstances
        {
            get{return storage.Values;}
        }
        
        public Model(IDictionary<Guid, BaseIfc>  storage, string name, string description, IfcAddress address, IfcPerson user, IfcOrganization owner)
        {
            this.storage = storage;

            this.storage.Add(address.Id, address);
            this.storage.Add(user.Id, user);
            this.storage.Add(owner.Id, owner);
            
            // Create an organization for app creation.
            var appOrg = new IfcOrganization(APPNAME);
            this.storage.Add(appOrg.Id, appOrg);

            // Create an authoring application.
            var v = owner.GetType().Assembly.GetName().Version.ToString();
            var app = new IfcApplication(appOrg, v, APPNAME, APPNAME);
            this.storage.Add(app.Id, app);

            // Create an person and history for the owner history.
            var personAndOrg = new IfcPersonAndOrganization(user, owner);
            this.storage.Add(personAndOrg.Id, personAndOrg);

            // Create an owner history for the project.
            var history = new IfcOwnerHistory(personAndOrg, app, UnixNow());
            this.storage.Add(history.Id, history);
            
            var lu = new IfcSIUnit(null, IfcUnitEnum.LENGTHUNIT, IfcSIUnitName.METRE);
            this.storage.Add(lu.Id, lu);
            var lengthUnit = new IfcUnit(lu);
            
            var au = new IfcSIUnit(null, IfcUnitEnum.AREAUNIT, IfcSIUnitName.SQUARE_METRE);
            this.storage.Add(au.Id, au);
            var areaUnit = new IfcUnit(au);
            
            var vu = new IfcSIUnit(null, IfcUnitEnum.VOLUMEUNIT, IfcSIUnitName.CUBIC_METRE);
            this.storage.Add(vu.Id, vu);
            var volumeUnit = new IfcUnit(vu);

            var sau = new IfcSIUnit(null, IfcUnitEnum.SOLIDANGLEUNIT, IfcSIUnitName.STERADIAN);
            this.storage.Add(sau.Id, sau);
            var solidAngleUnit = new IfcUnit(sau);
            
            var mu = new IfcSIUnit(null, IfcUnitEnum.MASSUNIT, IfcSIUnitName.GRAM);
            this.storage.Add(mu.Id, mu);
            var massUnit = new IfcUnit(mu);

            var tu = new IfcSIUnit(null, IfcUnitEnum.TIMEUNIT, IfcSIUnitName.SECOND);
            this.storage.Add(tu.Id, tu);
            var timeUnit = new IfcUnit(tu);

            var thu = new IfcSIUnit(null, IfcUnitEnum.THERMODYNAMICTEMPERATUREUNIT, IfcSIUnitName.DEGREE_CELSIUS);
            this.storage.Add(thu.Id, thu);
            var thermUnit = new IfcUnit(thu);
            
            var lmu = new IfcSIUnit(null, IfcUnitEnum.LUMINOUSINTENSITYUNIT, IfcSIUnitName.LUMEN);
            this.storage.Add(lmu.Id, lmu);
            var lumUnit = new IfcUnit(lmu);
            
            var pau = new IfcSIUnit(null, IfcUnitEnum.PLANEANGLEUNIT, IfcSIUnitName.RADIAN);
            this.storage.Add(pau.Id, pau);
            var planeAngleUnit = new IfcUnit(pau);
           
            var measure = new IfcMeasureWithUnit(new IfcValue(new IfcMeasureValue(new IfcPlaneAngleMeasure(1.745e-2))), planeAngleUnit);
            this.storage.Add(measure.Id, measure);

            var dimExp = new IfcDimensionalExponents(0,0,0,0,0,0,0);
            this.storage.Add(dimExp.Id, dimExp);

            var du = new IfcConversionBasedUnit(dimExp, IfcUnitEnum.PLANEANGLEUNIT, "DEGREE", measure);
            this.storage.Add(du.Id, du);
            var degree = new IfcUnit(du);
            
            var units = new List<IfcUnit>{lengthUnit, areaUnit, volumeUnit, solidAngleUnit, massUnit, timeUnit, thermUnit, lumUnit, planeAngleUnit, degree};
            var unitAss = new IfcUnitAssignment(units);
            this.storage.Add(unitAss.Id, unitAss);

            // Create the project.
            var proj = new IfcProject(IfcGuid.ToIfcGuid(Guid.NewGuid()), history, name, description, null, null, null, null, unitAss);   
            this.storage.Add(proj.Id, proj);
        }

        private int UnixNow()
        {
            return (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
        }

        public static IfcAddress CreateAddress(IDictionary<Guid, BaseIfc> storage, string description, string street, string city, string poBox, string state, string postalCode, string country)
        {
            var lines = new List<IfcLabel>(){street};
            return new IfcPostalAddress(IfcAddressTypeEnum.OFFICE, description, null, null, lines, poBox, city, state, postalCode, country);
        }

        public static IfcPerson CreateUser(IDictionary<Guid, BaseIfc> storage, string userId, string lastName, string firstName, string emailAddress, IfcRoleEnum role)
        {
            var r = new IfcActorRole(role);
            storage.Add(r.Id, r);
            return new IfcPerson(userId, lastName, firstName, null, null, null, new List<IfcActorRole>{r}, null);
        }

        public static IfcOrganization CreateOrganization(string name, string description, IfcAddress address)
        {
            // Create an organization to own the Project
            return new IfcOrganization(name, name, description, 
                            new List<IfcActorRole>(), new List<IfcAddress>(){address});
        }

        /// <summary>
        /// Create a Model given a STEP file.
        /// </summary>
        /// <param name="STEPfilePath">The path to the STEP file.</param>
        /// <param name="errors">A list of errors generated during creation of the Document.</param>
        /// <returns>A Model.</returns>
        /// <exception cref="FileNotFoundException">The specified file path does not exist.</exception>
        public Model(string STEPfilePath, IDictionary<Guid, BaseIfc> storage, out IList<STEPError> errors)
        {
            if (!File.Exists(STEPfilePath))
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
                Console.WriteLine($"{sw.Elapsed} for parsing STEP file {STEPfilePath}.");
                sw.Reset();

                sw.Start();
                var err = new List<STEPError>();
                foreach (var data in listener.InstanceData)
                {
                    if (listener.InstanceData[data.Key].ConstructedInstance != null)
                    {
                        // Instance may have been previously constructed as the result
                        // of another construction.
                        continue;
                    }

                    ConstructAndStoreInstance(data.Value, listener.InstanceData, data.Key, err, 0);
                }

                // Transfer the constructed instances to storage.
                foreach (var data in listener.InstanceData)
                {
                    var inst = (BaseIfc)data.Value.ConstructedInstance;
                    storage.Add(inst.Id, inst);
                }

                sw.Stop();
                Console.WriteLine($"{sw.Elapsed} for creating instances.");

                errors = err;
            }
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
            foreach (var element in storage.Values)
            {
                element.StepId = index;
                index++;
            }

            foreach (var element in storage.Values)
            {
                var instanceValue = element.ToSTEP();
                builder.AppendLine(instanceValue);
            }

            builder.Append(End());

            sw.Stop();
            Console.WriteLine($"{sw.Elapsed} for serializing Document to STEP.");

            return builder.ToString();
        }

        private string Begin(string filePath)
        {
            var project = AllInstancesOfType<IfcProject>().FirstOrDefault();
            var org = project != null ? project.OwnerHistory.OwningUser.TheOrganization.Name : new IfcLabel("Hypar");
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
    ('{org}'),
    'IFC-dotnet',
    '{typeof(Model).Assembly.GetName().Version}',
	'None');
FILE_SCHEMA (('IFC4'));
ENDSEC;
DATA;";
        }

        private string End()
        {
            return $@"ENDSEC;
END-ISO-10303-21;";
        }

        /// <summary>
        /// Recursively construct instances provided instance data.
        /// Construction is recursive because the instance data might include other
        /// instance data or id references to instances which have not yet been
        /// constructed.
        /// </summary>
        /// <param name="data">The instance data from which to construct the instance.</param>
        /// <param name="instances">The dictionary containing instance data gathered from the parser.</param>
        /// <returns></returns>
        private static object ConstructAndStoreInstance(STEP.InstanceData data, Dictionary<int, STEP.InstanceData> instances, int currLine, IList<STEPError> errors, int level)
        {
            var indent = string.Join("", Enumerable.Repeat("\t", level));

            //     Console.WriteLine($"{indent}{currLine},{data.Id} : Constructing type {data.Type.Name} with parameters [{string.Join(",",data.Parameters)}]");

            for (var i = 0; i < data.Parameters.Count(); i++)
            {
                if (data.Parameters[i] is STEP.InstanceData)
                {
                    data.Parameters[i] = ConstructAndStoreInstance((STEP.InstanceData)data.Parameters[i], instances, currLine, errors, level);
                }
                else if (data.Parameters[i] is STEP.STEPId)
                {
                    var stepId = data.Parameters[i] as STEP.STEPId;

                    // The instance has already been constructed.
                    // Use the id to look it up.
                    if (instances.ContainsKey(stepId.Value))
                    {
                        if (instances[stepId.Value].ConstructedInstance != null)
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
                else if (data.Parameters[i] is List<object>)
                {
                    var list = data.Parameters[i] as List<object>;

                    // The parameters will have been stored in a List<object> during parsing.
                    // We need to create a List<T> where T is the type expected by the constructor
                    // in the STEP file.
                    var listType = typeof(List<>);
                    var instanceType = data.Constructor.GetParameters()[i].ParameterType.GetGenericArguments()[0];
                    var constructedListType = listType.MakeGenericType(instanceType);
                    var subInstances = (IList)Activator.CreateInstance(constructedListType);

                    if (!list.Any())
                    {
                        // Return our newly type empty list.
                        data.Parameters[i] = subInstances;
                        continue;
                    }

                    foreach (var item in list)
                    {
                        if (item is STEP.STEPId)
                        {
                            var id = item as STEP.STEPId;

                            // Do a check for an existing instance with this id.
                            if (instances.ContainsKey(id.Value))
                            {
                                if (instances[id.Value].ConstructedInstance != null)
                                {
                                    var existing = CoerceObject(instances[id.Value].ConstructedInstance, instanceType);
                                    subInstances.Add(existing);
                                    continue;
                                }
                            }
                            var subInstance = ConstructAndStoreInstance(instances[id.Value], instances, currLine, errors, level);
                            var coerce = CoerceObject(subInstance, instanceType);
                            subInstances.Add(coerce);
                        }
                        else if (item is STEP.InstanceData)
                        {
                            var subInstance = ConstructAndStoreInstance((STEP.InstanceData)item, instances, currLine, errors, level);
                            var coerce = CoerceObject(subInstance, instanceType);
                            subInstances.Add(coerce);
                        }
                        else
                        {
                            var subInstance = item;
                            var coerce = CoerceObject(subInstance, instanceType);
                            subInstances.Add(coerce);
                        }
                    }
                    // Replace the list of STEPId with a list of instance references.
                    data.Parameters[i] = subInstances;
                }
            }

            for(var i=0; i<data.Parameters.Count; i++)
            {
                data.Parameters[i] = CoerceObject(data.Parameters[i],data.Constructor.GetParameters()[i].ParameterType); 
            }
            
            // Construct the instance, assuming that all required sub-instances
            // have already been constructed.
            var instance = data.Constructor.Invoke(data.Parameters.ToArray());

            if (instance == null)
            {
                throw new Exception($"Could not construct an instance of {data.Constructor.DeclaringType} with parameters {data.Parameters}.");
            }

            // Inline instances will have an id of -1. Don't store these.
            // But DO return them to be used as constructor parameters.
            if (data.Id != -1)
            {
                instances[data.Id].ConstructedInstance = (BaseIfc)instance;
            }

            //Console.WriteLine($"Setting instanceDataMap[{data.Id}] constructed instance as {instance.Id} for type {instance.GetType().Name}.");
            return instance;
        }
        private static object CoerceObject(object value, Type to)
        {
            if(value == null)
            {
                return null;
            }

            var result = value;
            if(typeof(Select).IsAssignableFrom(to))
            {
                var ctorChain = new List<System.Reflection.ConstructorInfo>();
                System.Reflection.ConstructorInfo ctor = null;
                if(STEPListener.TypeHasConstructorForSelectChoice(to, value.GetType(), out ctor, ref ctorChain))
                {
                    result = ctor.Invoke(new object[]{value});
                    if(ctorChain.Any())
                    {
                        // Construct the necessary wrappers working
                        // backwards. For the first constructor, the parameter
                        // will be the constructed instance.
                        for(var y=ctorChain.Count-1; y>=0; y--)
                        {
                            result = ctorChain[y].Invoke(new object[]{result});
                        }
                    }
                }
            }
            return result; 
        }
        		
		#region IElementQuery

        public IEnumerable<Tifc> AllInstancesDerivedFromType<Tifc>()
        {
            return storage.Values.Where(e=>typeof(Tifc).IsAssignableFrom(e.GetType())).Cast<Tifc>();
        }

        public IEnumerable<Tifc> AllInstancesOfType<Tifc>()
        {
            return storage.Values.Where(e=>e.GetType() == typeof(Tifc)).Cast<Tifc>();
        }

		#endregion
    }
}