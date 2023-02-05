using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using IFC;
using System.Globalization;
using Antlr4.Runtime.Misc;

namespace STEP
{
    public class STEPId
    {
        public int Value { get; set; }

        public STEPId(int value)
        {
            Value = value;
        }
    }

    public class InstanceData
    {
        public int Id { get; set; }
        public Type Type { get; set; }
        public List<object> Parameters { get; set; }

        public List<System.Reflection.ConstructorInfo> ConstructorChain { get; set; }
        public System.Reflection.ConstructorInfo Constructor { get; set; }

        /// <summary>
        /// The BaseIfc instance constructed using this data. 
        /// </summary>
        /// <returns></returns>
        public BaseIfc ConstructedInstance { get; set; }

        public bool HasDependencies
        {
            get
            {
                return Parameters.Any(p => p is STEPId);
            }
        }

        public InstanceData(int id, Type type, List<object> parameters, System.Reflection.ConstructorInfo ctor, List<System.Reflection.ConstructorInfo> ctorChain = null)
        {
            Id = id;
            Type = type;
            Parameters = parameters;
            Constructor = ctor;
            ConstructorChain = ctorChain;
        }
    }

    public class STEPListener : STEPBaseListener
    {
        private int currId;
        private readonly IEnumerable<Type> enums;
        private readonly Dictionary<string, Type> types;

        private readonly Dictionary<int, InstanceData> instanceData;

        public Dictionary<int, InstanceData> InstanceData
        {
            get { return instanceData; }
        }

        public IfcLabel FileName { get; private set; }

        public IfcDateTime TimeStamp { get; private set; }

        public STEPListener()
        {
            instanceData = new Dictionary<int, InstanceData>();

            // Parsing will involve finding many enum values
            // Cache the enum types for lookup during parsing. 
            enums = typeof(IFC.Document).Assembly.GetTypes().Where(t => t.IsEnum).ToList();
            types = new Dictionary<string, Type>();
            foreach (var item in typeof(IFC.Document).Assembly.GetTypes().Where(t => !t.IsEnum))
            {
                var key = item.Name.ToUpper();
                if (!types.ContainsKey(key))
                {
                    types[key] = item;
                }
            }
        }

        public override void EnterFileName([NotNull] STEPParser.FileNameContext context)
        {
            FileName = ParseString(typeof(IfcLabel), context.name().GetText());
            TimeStamp = ParseString(typeof(IfcDateTime), context.timeStamp().GetText());
        }

        public override void EnterInstance(STEPParser.InstanceContext context)
        {
            currId = int.Parse(context.Id().GetText().TrimStart('#'));
        }

        public override void EnterConstructor(STEPParser.ConstructorContext context)
        {
            // Only cache an instance if it's an outer instance.
            if (context.Parent is STEPParser.InstanceContext)
            {
                instanceData.Add(currId, ParseConstructor(currId, context));
            }
        }

        private System.Reflection.ConstructorInfo GetConstructorForType(Type required, ref List<System.Reflection.ConstructorInfo> ctorChain, Type fromSTEP = null)
        {
            var ctors = required.GetConstructors();

            if (fromSTEP == null || required.IsAssignableFrom(fromSTEP))
            {
                return ctors.OrderBy(c => c.GetParameters().Count()).Last();
            }

            System.Reflection.ConstructorInfo ctor;

            if (typeof(Select).IsAssignableFrom(required))
            {
                if (TypeHasConstructorForSelectChoice(required, fromSTEP, out ctor, ref ctorChain))
                {
                    return ctor;
                }
            }

            // See if there is a constructor with the fromSTEP as its
            // only parameter.
            // Ex: IfcNormalisedRatioMeasure(IfcRatioMeasure value)
            ctor = ctors.FirstOrDefault(c => c.GetParameters().First().ParameterType == fromSTEP);
            if (ctor != null)
            {
                return ctor;
            }

            throw new Exception($"I could not find a constructor which would create a {required} from a {fromSTEP}.");
        }

        internal static bool TypeHasConstructorForSelectChoice(Type t, Type choice, out System.Reflection.ConstructorInfo ctor, ref List<System.Reflection.ConstructorInfo> cTorChain)
        {
            var ctors = t.GetConstructors().ToArray();
            ctor = ctors.FirstOrDefault(c => c.GetParameters()[0].ParameterType.IsAssignableFrom(choice));
            if (ctor != null)
            {
                // You've found a constructor that takes the choice type.
                return true;
            }

            // No select constructor could be found that could construct the type directly.
            // See if any of the params are selects and test those selects' constructors for a parameter
            // of foundType.
            foreach (var c in ctors.Where(c => c.GetParameters().Any(p => typeof(Select).IsAssignableFrom(p.ParameterType))))
            {
                foreach (var p in c.GetParameters())
                {
                    if (TypeHasConstructorForSelectChoice(p.ParameterType, choice, out ctor, ref cTorChain))
                    {
                        cTorChain.Add(c);
                        return true;
                    }
                }
            }

            return false;
        }

        private InstanceData ParseConstructor(int id, STEPParser.ConstructorContext context, Type ifcType = null)
        {
            //Console.WriteLine($"Parsing constructor {id}.");

            var typeName = context.TypeRef().GetText();

            // If a type has been passed in, we're parsing a constructor
            // as a parameter of a constructor.
            if (ifcType == null)
            {
                if (!types.ContainsKey(typeName))
                {
                    throw new STEPUnknownTypeException(typeName);
                }
                ifcType = types[typeName];
            }

            Type fromSTEP = null;
            if (types.ContainsKey(typeName))
            {
                fromSTEP = types[typeName];
            }

            // Use the constructor which includes all non-optional parameters.
            var ctorChain = new List<System.Reflection.ConstructorInfo>();
            var ctor = GetConstructorForType(ifcType, ref ctorChain, fromSTEP);

            if (ctorChain.Any())
            {
                var chain = string.Join("=>", ctorChain.Select(c => c.DeclaringType.Name));
            }
            var ctorParams = ctor.GetParameters();

            var constructorParams = new List<object>();

            var cParams = context.parameter();

            for (var i = 0; i < cParams.Count(); i++)
            {
                var p = cParams[i];
                var pType = ctorParams[i].ParameterType;

                if (p.constructor() != null)
                {
                    // If the parameter is a constructor, it may be a constructor
                    // for a type that is used as a select. 
                    // In this case, we will need to find the select
                    // for which the type is a parameter, and construct an instance
                    // of the select instead.
                    constructorParams.Add(ParseConstructor(-1, p.constructor(), pType));
                }
                else if (p.collection() != null)
                {
                    constructorParams.Add(ParseCollection(pType, p.collection()));
                }
                else if (p.Undefined() != null)
                {
                    constructorParams.Add(null);
                }
                else if (p.StringLiteral() != null)
                {
                    constructorParams.Add(ParseString(pType, p.StringLiteral().GetText()));
                }
                else if (p.Derived() != null)
                {
                    constructorParams.Add(null);
                }
                else if (p.Enum() != null)
                {
                    constructorParams.Add(ParseEnum(pType, p.Enum().GetText()));
                }
                else if (p.BoolLogical() != null)
                {
                    constructorParams.Add(ParseBoolLogical(pType, p.BoolLogical().GetText()));
                }
                else if (p.RealLiteral() != null)
                {
                    constructorParams.Add(ParseReal(pType, p.RealLiteral().GetText()));
                }
                else if (p.AnyString() != null)
                {
                    constructorParams.Add(ParseString(pType, p.AnyString().GetText()));
                }
                else if (p.Id() != null)
                {
                    constructorParams.Add(ParseId(p.Id().GetText()));
                }
                else if (p.IntegerLiteral() != null)
                {
                    constructorParams.Add(ParseInt(pType, p.IntegerLiteral().GetText()));
                }
            }

            if (ctorParams.Count() != constructorParams.Count())
            {
                throw new STEPParameterMismatchException(ifcType, ctorParams.Count(), constructorParams.Count());
            }

            return new InstanceData(id, ifcType, constructorParams, ctor, ctorChain);
        }

        private dynamic ParseBoolLogical(Type t, string value)
        {
            var v = TrimDots(value);
            bool? result = null;
            if (v == "T")
            {
                result = true;
            }
            if (v == "F")
            {
                result = false;
            }
            if (v == "U")
            {
                result = null;
            }

            if (t == typeof(bool))
            {
                return (bool)result;
            }
            else if (t == typeof(bool?))
            {
                return result;
            }

            return CreateIfcTypeOrUseConstructorParameterTypeToConstruct<bool?>(t, result);

            throw new STEPParserException(typeof(bool?), value);
        }

        private dynamic ParseId(string value)
        {
            if (!int.TryParse(value.TrimStart('#'), out int result))
            {
                throw new STEPParserException(typeof(STEPId), value);
            }
            return new STEPId(result);
        }

        private dynamic ParseInt(Type t, string value)
        {
            if (!int.TryParse(value, out int result))
            {
                throw new STEPParserException(typeof(int), value);
            }

            if (t == typeof(int))
            {
                return result;
            }

            return CreateIfcTypeOrUseConstructorParameterTypeToConstruct<int>(t, result);
        }

        private dynamic ParseReal(Type t, string value)
        {
            if (!double.TryParse(value, NumberStyles.Any, CultureInfo.InvariantCulture, out double result))
            {
                throw new STEPParserException(typeof(double), value);
            }

            if (t == typeof(double))
            {
                return result;
            }

            return CreateIfcTypeOrUseConstructorParameterTypeToConstruct<double>(t, result);
        }

        private object CreateIfcTypeOrUseConstructorParameterTypeToConstruct<TValue>(Type typeToConstruct, TValue value)
        {
            var ctorChain = new List<System.Reflection.ConstructorInfo>();
            var ctor = GetConstructorForType(typeToConstruct, ref ctorChain);
            var cTorParam = ctor.GetParameters()[0];

            //Console.WriteLine($"TValue:{typeof(TValue).Name}, ParameterType:{cTorParam.ParameterType.Name}");
            if (typeof(TValue).IsAssignableFrom(cTorParam.ParameterType))
            {
                return Activator.CreateInstance(typeToConstruct, new object[] { value });
            }
            else
            {
                var p = Activator.CreateInstance(cTorParam.ParameterType, new object[] { value });
                return Activator.CreateInstance(typeToConstruct, new object[] { p });
            }
        }

        private dynamic ParseString(Type t, string value)
        {
            try
            {
                string result = TrimQuotes(value);
                if (t == typeof(string))
                {
                    return result;
                }
                return CreateIfcTypeOrUseConstructorParameterTypeToConstruct(t, result);
            }
            catch (Exception)
            {
                throw new STEPParserException(typeof(string), value);
            }
        }

        private string TrimQuotes(string value)
        {
            var result = value.TrimStart('\'');
            if (result.EndsWith("''"))
            {
                // Trim only one quote. It may be the case that 
                // the string ends in a '.
                result = result.Remove(result.Length - 2, 2);
            }
            else
            {
                result = result.TrimEnd('\'');
            }
            return result.Replace("''", "'");
        }

        private string TrimDots(string value)
        {
            return value.TrimStart('.').TrimEnd('.');
        }

        private dynamic ParseEnum(Type t, string value)
        {
            var trimmedValue = TrimDots(value);
            if (!t.IsEnum)
            {
                throw new STEPParserException(t, value);
            }

            try
            {
                return Enum.Parse(t, trimmedValue);
            }
            catch
            {
                throw new STEPParserException(typeof(Enum), trimmedValue);
            }
        }

        private dynamic ParseCollection(Type t, STEPParser.CollectionContext value)
        {
            // Ex: #25 = IFCDIRECTION((1., 0., 0.));
            // IfcDirection takes a List<double> as its input parameters, so we get the type argument - double - and
            // do the coercion for all the items.

            // Ex: #31 = IFCSITE('3BoQ8L5UXBEOT1kW0PLzej', #2, 'Default Site', 'Description of Default Site', $, #32, $, $, .ELEMENT., (24, 28, 0), (54, 25, 0), 10., $, $);
            // IfcSite takes two IfcCompoundPlaneMeasure objects. It seems that some IFC exporters will not specify a type's constructor, they'll just
            // specify the arguments as a collection. 

            Type collectionType;
            System.Reflection.ConstructorInfo ctor = null;
            var ctorChain = new List<System.Reflection.ConstructorInfo>();

            if (t.IsGenericType)
            {
                collectionType = t.GetGenericArguments()[0];
            }
            else
            {
                ctor = GetConstructorForType(t, ref ctorChain);
                collectionType = ctor.GetParameters()[0].ParameterType.GetGenericArguments()[0];
            }

            IList result = new List<object>();
            // If the collection is not a list of ids or a list of constructors,
            // then make a list of objects.
            var collectionVal = value.collectionValue();
            if (!collectionVal.All(cv => cv.Id() != null) && !collectionVal.All(cv => cv.constructor() != null))
            {
                var listType = typeof(List<>);
                var constructedListType = listType.MakeGenericType(collectionType);
                result = (IList)Activator.CreateInstance(constructedListType);
            }

            foreach (var cv in collectionVal)
            {
                if (cv.Id() != null)
                {
                    result.Add(ParseId(cv.Id().GetText()));
                }
                else if (cv.AnyString() != null)
                {
                    result.Add(ParseString(collectionType, cv.AnyString().GetText()));
                }
                else if (cv.StringLiteral() != null)
                {
                    result.Add(ParseString(collectionType, cv.StringLiteral().GetText()));
                }
                else if (cv.IntegerLiteral() != null)
                {
                    result.Add(ParseInt(collectionType, cv.IntegerLiteral().GetText()));
                }
                else if (cv.RealLiteral() != null)
                {
                    result.Add(ParseReal(collectionType, cv.RealLiteral().GetText()));
                }
                else if (cv.constructor() != null)
                {
                    var ctorResults = ParseConstructor(currId, cv.constructor());
                    result.Add(ctorResults);
                }
                else if (cv.collection() != null)
                {
                    result.Add(ParseCollection(collectionType, cv.collection()));
                }
            }

            if (ctor != null)
            {
                return new InstanceData(-1, t, new List<object>() { result }, ctor, ctorChain);
            }

            return result;
        }
    }
}