using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;

namespace Express
{
	public class ExpressListener : ExpressBaseListener
	{
		public List<EntityInfo> Entities {get;set;}
		public List<EnumInfo> Enums {get;set;}
		public List<TypeInfo> Types{get;set;}

		private EntityInfo currentEntityInfo;
		private CollectionInfo currentCollectionInfo;

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

		public override void ExitCollectionDeclaration(ExpressParser.CollectionDeclarationContext context)
		{
			((CollectionInfo)currentTypeInfo.Type).Type = context.collectionValueType().GetText();
		}

		public override void EnterArrayDecl(ExpressParser.ArrayDeclContext context)
		{
			if(currentTypeInfo.Type is ArrayInfo)
			{
				((ArrayInfo)currentTypeInfo.Type).Rank++;
			}
			else
			{
				var ai = new ArrayInfo();
				currentTypeInfo.Type = ai;
				ai.Size = int.Parse(context.setParameters().Integer()[0].GetText());
			}
		}

		public override void EnterSetDecl(ExpressParser.SetDeclContext context)
		{
			if(currentTypeInfo.Type is SetInfo)
			{
				((SetInfo)currentTypeInfo.Type).Rank++;
			}
			else
			{
				var si = new SetInfo();
				currentTypeInfo.Type = si;
				si.Size = int.Parse(context.setParameters().Integer()[0].GetText());
			}
		}

		public override void EnterListDecl(ExpressParser.ListDeclContext context)
		{
			if(currentTypeInfo.Type is ListInfo)
			{
				((ListInfo)currentTypeInfo.Type).Rank++;
			}
			else
			{
				var li = new ListInfo();
				currentTypeInfo.Type = li;
				li.Size = int.Parse(context.setParameters().Integer()[0].GetText());
			}
		}

		public override void EnterEnumeration(ExpressParser.EnumerationContext context)
		{
			var enumInfo = new EnumInfo();
			enumInfo.Values = context.idList().GetText();
			currentTypeInfo.Type = enumInfo;
		}

		public override void EnterSelect(ExpressParser.SelectContext context)
		{
			var selectInfo = new SelectInfo();
			selectInfo.Values = context.idList().GetText();
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

		public override void EnterInverseAttribute(ExpressParser.InverseAttributeContext context)
		{
			currentTypeInfo = new AttributeInfo(context.Identifier()[0].GetText());
			currentEntityInfo.Attributes.Add((AttributeInfo)currentTypeInfo);
			if(context.Identifier().Length == 2)
			{
				currentTypeInfo.Type = context.Identifier()[1].GetText();
			}
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

		public override void EnterSupertypeDecl(ExpressParser.SupertypeDeclContext context)
		{
			if(context.ABSTRACT() != null)
			{
				currentEntityInfo.IsAbstract = true;
			}

			currentEntityInfo.SupertypeOf.Add(context.Identifier().GetText());
		}

		public override void EnterSupertypesDecl(ExpressParser.SupertypesDeclContext context)
		{
			if(context.ABSTRACT() != null)
			{
				currentEntityInfo.IsAbstract = true;
			}

			currentEntityInfo.SupertypeOf.AddRange(context.oneOf().idList().GetText().Split(','));
		}

		public override void EnterSubtypeDecl(ExpressParser.SubtypeDeclContext context)
		{
			currentEntityInfo.SubtypeOf.Add(context.Identifier().GetText());
		}

		public override void EnterSubtypesDecl(ExpressParser.SubtypesDeclContext context)
		{
			currentEntityInfo.SubtypeOf.AddRange(context.oneOf().idList().GetText().Split(','));
		}
	}
}