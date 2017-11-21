using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using IFC4;

namespace STEP
{
	public class STEPId
	{
		public int Value {get;set;}

		public STEPId(int value)
		{
			Value = value;
		}
	}

	public class InstanceData
	{
		public int Id{get;set;}
		public Type Type{get;set;}
		public List<object> Parameters{get;set;}

		public System.Reflection.ConstructorInfo Constructor{get;set;}

		/// <summary>
		/// The unique identifer of an BaseIfc instance constructed using this data. 
		/// </summary>
		/// <returns></returns>
		public Guid ConstructedGuid{get;set;}

		public bool HasDependencies
		{
			get
			{
				return Parameters.Any(p=>p is STEPId);
			}
		}

		public InstanceData(int id, Type type, List<object> parameters, System.Reflection.ConstructorInfo ctorInfo)
		{
			Id = id;
			Type = type;
			Parameters = parameters;
			Constructor = ctorInfo;
		}
	}

	public class STEPListener : STEPBaseListener
	{
		private int currId;
		private IEnumerable<Type> enums;
		private IEnumerable<Type> types;

		private Dictionary<int,InstanceData> instanceData;

		public Dictionary<int, InstanceData> InstanceData
		{
			get{return instanceData;}
		}

		public STEPListener()
		{
			instanceData = new Dictionary<int,InstanceData>();

			// Parsing will involve finding many enum values
			// Cache the enum types for lookup during parsing. 
			enums = typeof(IFC4.Model).Assembly.GetTypes().Where(t=>t.IsEnum).ToList();

			types = typeof(IFC4.Model).Assembly.GetTypes().Where(t=>!t.IsEnum).ToList();
		}

		public override void EnterInstance(STEPParser.InstanceContext context)
		{
			currId = int.Parse(context.Id().GetText().TrimStart('#'));
		}

		public override void EnterConstructor(STEPParser.ConstructorContext context)
		{
			// Only cache an instance if it's an outer instance.
			if(context.Parent is STEPParser.InstanceContext)
			{
				instanceData.Add(currId, ParseConstructor(currId, context));
			}
		}

		private System.Reflection.ConstructorInfo GetMostLikelyConstructorForType(Type t)
		{
			return t.GetConstructors().OrderBy(c=>c.GetParameters().Count()).Last();
		}

		private InstanceData ParseConstructor(int id, STEPParser.ConstructorContext context)
		{
			//Console.WriteLine($"Parsing context: {currId.Value} {context.GetText()}");

			var typeName = context.TypeRef().GetText();
			var ifcType = types.FirstOrDefault(t=>t.Name.ToUpper() == typeName);

			if(ifcType == null)
			{
				throw new STEPUnknownTypeException(typeName);
			}

			// Use the constructor which includes all non-optional parameters.
			var ctor = GetMostLikelyConstructorForType(ifcType);
			var ctorParams = ctor.GetParameters();

			var constructorParams = new List<object>();

			var cParams = context.parameter();

			for(var i=0; i<cParams.Count(); i++)
			{
				var p = cParams[i];
				var pType = ctorParams[i].ParameterType;

				if(p.constructor() != null)
				{
					constructorParams.Add(ParseConstructor(-1, p.constructor()));
				}
				else if(p.collection() != null)
				{
					constructorParams.Add(ParseCollection(pType, p.collection()));
				}
				else if(p.Undefined() != null)
				{
					constructorParams.Add(null);
				}
				else if(p.StringLiteral() != null)
				{
					constructorParams.Add(ParseString(pType, p.StringLiteral().GetText()));
				}
				else if(p.Derived() != null)
				{
					constructorParams.Add(null);
				}
				else if(p.Enum() != null)
				{
					constructorParams.Add(ParseEnum(pType, p.Enum().GetText()));
				}
				else if(p.BoolLogical() != null)
				{
					constructorParams.Add(ParseBoolLogical(pType, p.BoolLogical().GetText()));
				}
				else if(p.RealLiteral() != null)
				{
					constructorParams.Add(ParseReal(pType, p.RealLiteral().GetText()));
				}
				else if(p.AnyString() != null)
				{
					constructorParams.Add(ParseString(pType, p.AnyString().GetText()));
				}
				else if(p.Id() != null)
				{
					constructorParams.Add(ParseId(p.Id().GetText()));
				}
				else if(p.IntegerLiteral() != null)
				{
					constructorParams.Add(ParseInt(pType, p.IntegerLiteral().GetText()));
				}
			}

			if(ctorParams.Count() != constructorParams.Count())
			{
				throw new STEPParameterMismatchException(ifcType, ctorParams.Count(), constructorParams.Count());
			}
		
			return new InstanceData(id, ifcType, constructorParams, ctor);
		}

		private dynamic ParseBoolLogical(Type t, string value)
		{
			var v = TrimDots(value);
			bool? result = null;
			if(v == "T")
			{
				result = true;
			}
			if(v == "F")
			{
				result = false;
			}
			if(v == "U")
			{
				result = null;
			}

			if(t == typeof(bool))
			{
				return (bool)result;
			}
			else if(t == typeof(bool?))
			{
				return result;
			}

			return CreateIfcTypeOrUseConstructorParameterTypeToConstruct<bool?>(t, result);

			throw new STEPParserException(typeof(bool?), value);
		}

		private dynamic ParseId(string value)
		{
			int result;
			if(!int.TryParse(value.TrimStart('#'), out result))
			{
				throw new STEPParserException(typeof(STEPId), value);
			}
			return new STEPId(result);
		}

		private dynamic ParseInt(Type t, string value)
		{
			int result;
			if(!int.TryParse(value, out result))
			{
				throw new STEPParserException(typeof(int), value);
			}

			if(t == typeof(int))
			{
				return result;
			}

			return CreateIfcTypeOrUseConstructorParameterTypeToConstruct<int>(t, result);
		}

		private dynamic ParseReal(Type t, string value)
		{
			double result;
			if(!double.TryParse(value, out result))
			{
				throw new STEPParserException(typeof(double), value);
			}

			if(t == typeof(double))
			{
				return result;
			}

			return CreateIfcTypeOrUseConstructorParameterTypeToConstruct<double>(t, result);
		}

		private object CreateIfcTypeOrUseConstructorParameterTypeToConstruct<TValue>(Type typeToConstruct, TValue value)
		{
			var cTor = GetMostLikelyConstructorForType(typeToConstruct);
			var cTorParam = cTor.GetParameters()[0];

			if(cTorParam.ParameterType == typeof(TValue))
			{
				return Activator.CreateInstance(typeToConstruct, new object[]{value});
			}
			else
			{	
				var p = Activator.CreateInstance(cTorParam.ParameterType, new object[]{value});
				return Activator.CreateInstance(typeToConstruct, new object[]{p});
			}
		}

		private dynamic ParseString(Type t, string value)
		{
			string result = null;
			try
			{
				result = TrimQuotes(value);
				if(t == typeof(string))
				{
					return result;
				}
				return CreateIfcTypeOrUseConstructorParameterTypeToConstruct<string>(t, result);
			}
			catch(Exception)
			{
				throw new STEPParserException(typeof(string), value);
			}
		}

		private string TrimQuotes(string value)
		{
			return value.TrimStart('\'').TrimEnd('\'');
		}

		private string TrimDots(string value)
		{
			return value.TrimStart('.').TrimEnd('.');
		}

		private dynamic ParseEnum(Type t, string value)
		{
			var trimmedValue = TrimDots(value);
			if(!t.IsEnum)
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
			//Console.WriteLine(t.Name);

			// Ex: #25 = IFCDIRECTION((1., 0., 0.));
			// IfcDirection takes a List<double> as its input parameters, so we get the type argument - double - and
			// do the coercion for all the items.

			// Ex: #31 = IFCSITE('3BoQ8L5UXBEOT1kW0PLzej', #2, 'Default Site', 'Description of Default Site', $, #32, $, $, .ELEMENT., (24, 28, 0), (54, 25, 0), 10., $, $);
			// IfcSite takes two IfcCompoundPlaneMeasure objects. It seems that some IFC exporters will not specify a type's constructor, they'll just
			// specify the arguments as a collection. 

			Type collectionType;
			System.Reflection.ConstructorInfo ctor = null;

			if(t.IsGenericType)
			{
				collectionType = t.GetGenericArguments()[0];
			}
			else
			{
				ctor = GetMostLikelyConstructorForType(t);
				collectionType = ctor.GetParameters()[0].ParameterType.GetGenericArguments()[0];
			} 

			var result = new List<object>();

			foreach(var cv in value.collectionValue())
			{
				if(cv.Id() != null)
				{
					result.Add(ParseId(cv.Id().GetText()));
				}
				else if(cv.AnyString() != null)
				{
					result.Add(ParseString(collectionType, cv.AnyString().GetText()));
				}
				else if(cv.StringLiteral() != null)
				{
					result.Add(ParseString(collectionType, cv.StringLiteral().GetText()));
				}
				else if(cv.IntegerLiteral() != null)
				{
					result.Add(ParseInt(collectionType, cv.IntegerLiteral().GetText()));
				}
				else if(cv.RealLiteral() != null)
				{
					result.Add(ParseReal(collectionType, cv.RealLiteral().GetText()));
				}
				else if(cv.constructor() != null)
				{
					result.Add(ParseConstructor(currId, cv.constructor()));
				}
			}

			if(ctor != null)
			{
				//Console.WriteLine($"Found implicit constructor of type, {t}");
				return new InstanceData(-1, t, new List<object>(){result}, ctor);
			}

			return result;
		}
	}
}