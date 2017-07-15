using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;

namespace Express
{
	public class TypeInfo
	{
		public string Name{get;set;}
		public object Type{get;set;}

		public override string ToString()
		{
			if(Type is EnumInfo)
			{
				var e = (EnumInfo)Type;
				var enumStr =
$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public enum {Name} 
	{{
		{e.Values}
	}}

";
				return enumStr;
			}

			if(Type is SelectInfo)
			{
				var s = (SelectInfo)Type;
				var selectStr =
$@"	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm
	/// </summary>
	public Select<T> {Name} where T : {s.Values} {{}}

";

				return selectStr;
			}

			// Create a 'using' directive which will allow
			// us to to use this alias anywhere in the namespace.
			if(Type == null)
			{
				return $"***ERROR FOR TYPE {Name}";
			}
			return $"\tusing {Name} = {Type.ToString()};\n";
		}
	}

	public class AtomicTypeInfo
	{
		private string type;
		public AtomicTypeInfo(string type)
		{
			this.type = type;
		}

		public override string ToString()
		{
			var retType = "object";
			switch(type)
			{
				case "BOOLEAN":
					retType = "bool";
					break;
				case "LOGICAL":
					retType = "bool?";
					break;
				case "REAL":
					retType = "double";
					break;
				case "STRING":
					retType = "string";
					break;
				case "INTEGER":
					retType = "int";
					break;
				case "NUMBER":
					retType = "double";
					break;
				default:
					retType = type;
					break;
			}
			return retType;
		}
	}

	public class AttributeInfo
	{
		public string Name{get;set;}
		public object Type{get;set;}

		public bool IsOptional{get;set;}

		public override string ToString()
		{
			if(Type == null)
			{
				return $"***ERROR FOR ATTRIBUTE {Name}";
			}
			var attStr =$"\t\tpublic {Type.ToString()} {Name} {{get;set;}}";

			return attStr;
		}
	}

	public class EntityInfo
	{

		public string Name {get;set;}
		public string Supertype {get;set;}

		public string Subtype{get;set;}
		
		public List<AttributeInfo> Attributes{get;set;}

		public bool IsAbstract{get;set;}

		public string Modifier
		{
			get
			{
				return IsAbstract? "abstract" : string.Empty;
			}
		}

		public EntityInfo()
		{
			Attributes = new List<AttributeInfo>();
		}

		public override string ToString()
		{
			var propStringBuilder = new StringBuilder();
			foreach(var a in Attributes)
			{
				propStringBuilder.AppendLine(a.ToString());
			}

			var supertype = Subtype != null? $" : {Subtype}":"";

			var classStr =
$@"
	/// <summary>
	/// <see href=""http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{Name.ToLower()}.htm""/>
	/// </summary>
	public {Modifier} partial class {Name}{supertype}
	{{
{propStringBuilder.ToString()}
	}}
	";
			return classStr;
		}
	}

	public class StringList
	{
		public string Name {get;set;}
		public string Values{get;set;}
	}

	public class EnumInfo : StringList{}

	public class SelectInfo : StringList{}

	public abstract class CollectionInfo
	{
		public string Name{get;set;}
		public string Type{get;set;}
		public int Size{get;set;}
	}

	public class SetInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"List<{Type}>;";
		}
	}

	public class ArrayInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"{Type}[{Size}];";
		}
	}

	public class ListInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"List<{Type}>;";
		}
	}

	public class ExpressListener : ExpressBaseListener
	{
		public List<EntityInfo> Entities {get;set;}
		public List<EnumInfo> Enums {get;set;}
		public List<TypeInfo> Types{get;set;}

		private EntityInfo currentEntityInfo;
		private AttributeInfo currentAttributeInfo;

		private TypeInfo currentTypeInfo;

		public ExpressListener()
		{
			Types = new List<TypeInfo>();
			Entities = new List<EntityInfo>();
			Enums= new List<EnumInfo>();
		}

		public override void EnterTypeDeclaration(ExpressParser.TypeDeclarationContext context)
		{
			currentTypeInfo = new TypeInfo();
			Types.Add(currentTypeInfo);
		}

		public override void ExitTypeDeclaration(ExpressParser.TypeDeclarationContext context)
		{
			currentTypeInfo = null;
		}

		public override void EnterTypeName(ExpressParser.TypeNameContext context){
			currentTypeInfo.Name = context.GetText();
		}

		public override void EnterAtomicValueType(ExpressParser.AtomicValueTypeContext context)
		{
			if(context.Parent is ExpressParser.ValueTypeContext)
			{
				if(context.Parent.Parent is ExpressParser.TypeDeclarationContext)
				{
					currentTypeInfo.Type = new AtomicTypeInfo(context.GetText());
					return;
				}
				else if(context.Parent.Parent is ExpressParser.AttributeContext)
				{
					currentAttributeInfo.Type = new AtomicTypeInfo(context.GetText());
					return;
				}
			}

			else if(context.Parent is ExpressParser.SetParametersContext)
			{
				if(context.Parent.Parent.Parent is ExpressParser.TypeDeclarationContext)
				{
					if(context.Parent.Parent is ExpressParser.SetDeclarationContext)
					{
						currentTypeInfo.Type = new SetInfo();
						return;
					}
					if(context.Parent.Parent is ExpressParser.ArrayDeclarationContext)
					{
						currentTypeInfo.Type = new ArrayInfo();
						return;
					}
					if(context.Parent.Parent is ExpressParser.ListDeclarationContext)
					{
						currentTypeInfo.Type = new ListInfo();
						return;
					}
				}
				else if(context.Parent.Parent is ExpressParser.AttributeContext)
				{
					if(context.Parent.Parent is ExpressParser.SetDeclarationContext)
					{
						currentAttributeInfo.Type = new SetInfo();
						return;
					}
					if(context.Parent.Parent is ExpressParser.ArrayDeclarationContext)
					{
						currentAttributeInfo.Type = new ArrayInfo();
						return;
					}
					if(context.Parent.Parent is ExpressParser.ListDeclarationContext)
					{
						currentAttributeInfo.Type = new ListInfo();
						return;
					}
				}
			}
		}

		public override void EnterEnumIdList(ExpressParser.EnumIdListContext context)
		{
			var enumInfo = new EnumInfo();
			enumInfo.Values = context.GetText();

			if(context.Parent.Parent.Parent is ExpressParser.AttributeContext)
			{
				currentAttributeInfo.Type = enumInfo;
			}

			if(context.Parent.Parent.Parent is ExpressParser.TypeDeclarationContext)
			{
				currentTypeInfo.Type = enumInfo;
			}
			
		}

		public override void EnterSelectIdList(ExpressParser.SelectIdListContext context)
		{
			var selectInfo = new SelectInfo();
			selectInfo.Values = context.GetText();
			
			if(context.Parent.Parent.Parent is ExpressParser.AttributeContext)
			{
				currentAttributeInfo.Type = selectInfo;
			}

			if(context.Parent.Parent.Parent is ExpressParser.TypeDeclarationContext)
			{
				currentTypeInfo.Type = selectInfo;
			}
		}

		public override void EnterEntityDeclaration(ExpressParser.EntityDeclarationContext context)
		{
			currentEntityInfo = new EntityInfo();
			Entities.Add(currentEntityInfo);
		}

		public override void ExitEntityDeclaration(ExpressParser.EntityDeclarationContext context)
		{
			currentEntityInfo = null;
		}

		public override void EnterEntityName(ExpressParser.EntityNameContext context)
		{
			
			currentEntityInfo.Name = context.GetText();
		}

		public override void EnterAttribute(ExpressParser.AttributeContext context)
		{
			currentAttributeInfo = new AttributeInfo();
			currentEntityInfo.Attributes.Add(currentAttributeInfo);
		}

		public override void ExitAttribute(ExpressParser.AttributeContext context)
		{
			currentAttributeInfo = null;
		}

		public override void EnterOptional(ExpressParser.OptionalContext context)
		{
			currentAttributeInfo.IsOptional = true;
		}

		public override void EnterAttributeName(ExpressParser.AttributeNameContext context) 
		{ 
			currentAttributeInfo.Name = context.GetText();
		}

		public override void EnterAbstract(ExpressParser.AbstractContext context)
		{
			currentEntityInfo.IsAbstract = true;
		}

		public override void EnterSupertypeName(ExpressParser.SupertypeNameContext context)
		{
			currentEntityInfo.Supertype = context.GetText();
		}
		
		public override void EnterSubtypeName(ExpressParser.SubtypeNameContext context)
		{
			currentEntityInfo.Subtype = context.GetText();
		}
	}
}