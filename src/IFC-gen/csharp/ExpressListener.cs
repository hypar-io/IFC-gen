using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;

namespace Express
{

	public class StringList
	{
		public string Name {get;set;}
		public string Values{get;set;}
	}

	public class EnumInfo : StringList{}

	public class SelectInfo : StringList{}



	public class ExpressListener : ExpressBaseListener
	{
		public List<EntityInfo> Entities {get;set;}
		public List<EnumInfo> Enums {get;set;}
		public List<TypeInfo> Types{get;set;}

		private EntityInfo currentEntityInfo;

		// The cursor to the type currently being parsed.
		// This may be a defined type or an attribute.
		private TypeInfo currentTypeInfo;

		public ExpressListener()
		{
			Types = new List<TypeInfo>();
			Entities = new List<EntityInfo>();
			Enums= new List<EnumInfo>();
		}

		public override void EnterTypeDeclaration(ExpressParser.TypeDeclarationContext context)
		{
			currentTypeInfo = new TypeInfo(context.Identifier().GetText());
			Types.Add(currentTypeInfo);
		}

		public override void ExitTypeDeclaration(ExpressParser.TypeDeclarationContext context)
		{
			currentTypeInfo = null;
		}

		public override void EnterValueType(ExpressParser.ValueTypeContext context)
		{
			currentTypeInfo.Type = new AtomicTypeInfo(context.GetText());
		}

		/*public override void EnterCollectionValueType(ExpressParser.CollectionValueTypeContext context)
		{
			if(context.Parent is ExpressParser.SetDeclarationContext)
			{
				currentTypeInfo.Type = new SetInfo();
				return;
			}
			else if(context.Parent is ExpressParser.ArrayDeclarationContext)
			{
				currentTypeInfo.Type = new ArrayInfo();
				return;
			}
			else if(context.Parent is ExpressParser.ListDeclarationContext)
			{
				currentTypeInfo.Type = new ListInfo();
				return;
			}
		}*/

		public override void EnterEnumeration(ExpressParser.EnumerationContext context)
		{
			var enumInfo = new EnumInfo();
			enumInfo.Values = context.idList().GetText();
			currentTypeInfo.Type = enumInfo;
		}

		public override void EnterSelect(ExpressParser.SelectContext context)
		{
			var selectInfo = new SelectInfo();
			selectInfo.Values = context.GetText();
			currentTypeInfo.Type = selectInfo;
		}

		public override void EnterEntityDeclaration(ExpressParser.EntityDeclarationContext context)
		{
			currentEntityInfo = new EntityInfo(context.Identifier().GetText());
			Entities.Add(currentEntityInfo);
		}

		public override void ExitEntityDeclaration(ExpressParser.EntityDeclarationContext context)
		{
			currentEntityInfo = null;
		}

		public override void EnterAttribute(ExpressParser.AttributeContext context)
		{
			if(context.Identifier() != null)
			{
				currentTypeInfo = new AttributeInfo(context.Identifier().GetText());
			}
			else
			{
				currentTypeInfo = new AttributeInfo(context.path().GetText());
			}
			
			currentEntityInfo.Attributes.Add((AttributeInfo)currentTypeInfo);
		}

		public override void ExitAttribute(ExpressParser.AttributeContext context)
		{
			currentTypeInfo = null;
		}

		public override void EnterOptional(ExpressParser.OptionalContext context)
		{
			((AttributeInfo)currentTypeInfo).IsOptional = true;
		}

		/*public override void EnterSupertypeDeclaration(ExpressParser.SupertypeDeclarationContext context)
		{
			
			if(context.ABSTRACT() != null)
			{
				currentEntityInfo.IsAbstract = true;
			}

			if(context.oneOf() != null)
			{
				
			}
			else
			{
				currentEntityInfo.SupertypeOf.Add(context.Identifier().GetText());
			}
		}

		public override void EnterSubtypeDeclaration(ExpressParser.SubtypeDeclarationContext context)
		{
			currentEntityInfo.Subtype = context.GetText();
		}*/
	}
}