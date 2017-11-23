using Express;
using System;
using System.Linq;
using System.Text;

namespace IFC4.Generators
{
    public class CsharpLanguageGenerator : ILanguageGenerator{

        public string AttributeDataAssignment(AttributeData data){
            return $"\t\t\t{data.Name} = {data.ParameterName};\n";
        }

        public string AttributeDataAllocation(AttributeData data){
            if(data.IsCollection){
				return $"\t\t\t{data.Name} = new {data.Type}();\n";
			}
			return string.Empty;
        }

        public string AttributeDataType(AttributeData data){
            if(data.IsCollection)
            {
                return 	$"{string.Join("",Enumerable.Repeat("List<",data.Rank))}{data.type}{string.Join("",Enumerable.Repeat(">",data.Rank))}";
            }
            return data.type;
        }

        public string AttributeDataString(AttributeData data){
            var opt = data.IsOptional? "// optional":string.Empty;
			var prop = $"\t\tpublic {data.Type} {data.Name}{{get;set;}} {opt}\n";
			return prop;
        }

        public string SimpleTypeWrappedType(SimpleType data){
            if(data.IsCollectionType)
            {
                return $"{string.Join("",Enumerable.Repeat("List<",data.Rank))}{data.wrappedType}{string.Join("",Enumerable.Repeat(">",data.Rank))}";
            }
            return data.wrappedType;
        }

        public string SimpleTypeAsCollection(SimpleType data){
            return $"{string.Join("",Enumerable.Repeat("List<",data.Rank))}{data.WrappedType}{string.Join("",Enumerable.Repeat(">",data.Rank))}";
        }

        public string SimpleTypeString(SimpleType data){
            var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{data.Name.ToLower()}.htm
	/// </summary>
	public class {data.Name} : IfcType<{data.WrappedType}>
	{{
		public {data.Name}({data.WrappedType} value):base(value){{}}	

		public static implicit operator {data.WrappedType}({data.Name} v)
		{{
			return v.Value;
		}}

		public static implicit operator {data.Name}({data.WrappedType} v)
		{{
			return new {data.Name}(v);
		}}	

		public static {data.Name} FromJSON(string json)
		{{
			return JsonConvert.DeserializeObject<{data.Name}>(json);
		}}
	}}
";
			return result;
        }

        public string EnumTypeString(EnumType data){
            var result = 
    $@"	/// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{data.Name.ToLower()}.htm
    /// </summary>
    public enum {data.Name} {{{string.Join(",",data.Values)}}}
";
			return result;
        }

        public string SelectTypeString(SelectType data){
            var constructors = new StringBuilder();
			foreach(var value in data.Values)
			{
				constructors.AppendLine($"\t\tpublic {data.Name}({value} value):base(value){{}}");
			}
			var result = 
	$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{data.Name.ToLower()}.htm
	/// </summary>
	[TypeConverter(typeof(SelectConverter<{data.Name}>))]
	public class {data.Name} : IfcSelect<{string.Join(",",data.Values)}>
	{{
{constructors}
		public static {data.Name} FromJSON(string json)
		{{
			return JsonConvert.DeserializeObject<{data.Name}>(json);
		}}
	}}
";
			return result;
        }

        public string EntityConstructorParams(Entity data, bool includeOptional)
		{
			// Constructor parameters include the union of this type's attributes and all super type attributes.
			// A constructor parameter is created for every attribute which does not derive
			// from IFCRelationship.

			var parents = data.ParentsAndSelf().Reverse();
			var attrs = parents.SelectMany(p=>p.Attributes);

			if(!attrs.Any())
			{
				return string.Empty;
			}

			var validAttrs = includeOptional?data.AttributesWithOptional(attrs):data.AttributesWithoutOptional(attrs);

			return string.Join(",", validAttrs.Select(a=>$"{a.Type} {a.ParameterName}"));
		}

        public string EntityBaseConstructorParams(Entity data, bool includeOptional){
            // Base constructor parameters include the union of all super type attributes.
			var parents = data.Parents().Reverse();

			var attrs = parents.SelectMany(p=>p.Attributes);
						
			if(!attrs.Any())
			{
				return string.Empty;
			}

			var validAttrs = includeOptional?data.AttributesWithOptional(attrs):data.AttributesWithoutOptional(attrs);

			return string.Join(",", validAttrs.Select(a=>$"{a.ParameterName}"));
        }

        public string EntityString(Entity data){
            var super =  "BaseIfc";
			var newMod = string.Empty;
			if(data.Subs.Any())
			{
				super = data.Subs[0].Name;;
				newMod = "new";
			}

			var modifier = data.IsAbstract? "abstract":string.Empty;

			// Create two constructors, one which includes optional parameters and 
			// one which does not. We need to check whether any of the parent types
			// have optional attributes as well, to avoid the case where the current type
			// doesn't have optional parameters, but a base type does.
			string constructors;
			if(data.ParentsAndSelf().SelectMany(e=>e.Attributes.Where(a=>a.IsOptional)).Any())
			{
				constructors = $@"
		/// <summary>
		/// Construct a {data.Name} with all required attributes.
		/// </summary>
		public {data.Name}({data.ConstructorParams(false)}):base({data.BaseConstructorParams(false)})
		{{
{data.Allocations()}
{data.Assignments(false)}
		}}
		/// <summary>
		/// Construct a {data.Name} with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public {data.Name}({data.ConstructorParams(true)}):base({data.BaseConstructorParams(true)})
		{{
{data.Allocations()}
{data.Assignments(true)}
		}}";
			}
			else
			{
				constructors =$@"
		/// <summary>
		/// Construct a {data.Name} with all required attributes.
		/// </summary>
		[JsonConstructor]
		public {data.Name}({data.ConstructorParams(false)}):base({data.BaseConstructorParams(false)})
		{{
{data.Allocations()}
{data.Assignments(false)}
		}}";
			}

			var classStr =
$@"
	/// <summary>
	/// <see href=""http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{data.Name.ToLower()}.htm""/>
	/// </summary>
	public {modifier} partial class {data.Name} : {super}
	{{{data.Properties()}{constructors}
		public static {newMod} {data.Name} FromJSON(string json)
		{{
			return JsonConvert.DeserializeObject<{data.Name}>(json);
		}}
	}}";
			return classStr;
        }
	}
}