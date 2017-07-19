using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;

namespace Express
{
	public class ExpressListener : ExpressBaseListener
	{
		public List<EntityDeclarationInfo> Entities {get;set;}

		public List<TypeDeclaration> Types{get;set;}

		/// <summary>
		/// The cursor to the entity declaration currently being parsed.
		/// </summary>
		private EntityDeclarationInfo currentEntityInfo;

		/// <summary>
		///The cursor to the type declaration currently being parsed.
		// This may be a defined type or an attribute.
		/// </summary>
		private TypeInfo currentTypeInfo;

		public ExpressListener()
		{
			Types = new List<TypeDeclaration>();
			Entities = new List<EntityDeclarationInfo>();
		}

		private TypeInfo TypeInfoFromValueTypeContext(string name, ExpressParser.ValueTypeContext ctx)
		{
			TypeInfo typeInfo = null;
			// ENUMERATION
			if(ctx.enumeration() != null)
			{
				typeInfo = new EnumInfo(name);
			}
			//SELECT
			else if(ctx.select() != null)
			{
				typeInfo = new SelectInfo(name);
			}
			//COLLECTION
			else if(ctx.collection() != null)
			{
				typeInfo = new CollectionInfo(name);
			}
			// DEFINED TYPE
			else if(ctx.atomicType() != null)
			{
				typeInfo = new DefinedTypeInfo(name);
				typeInfo.ValueType = TypeInfo.ToSystemType(ctx.atomicType().GetText());
			}
			return typeInfo;
		}

		public override void EnterTypeDeclaration(ExpressParser.TypeDeclarationContext context)
		{
			currentTypeInfo = TypeInfoFromValueTypeContext(context.Identifier().GetText(),context.valueType());
			Types.Add(new TypeDeclaration(currentTypeInfo));
		}

		public override void EnterEnumeration(ExpressParser.EnumerationContext context)
		{
			((EnumInfo)currentTypeInfo).Values = context.idList().GetText().Split(',');
		}

		public override void EnterSelect(ExpressParser.SelectContext context)
		{
			((SelectInfo)currentTypeInfo).Values = context.idList().GetText().Split(',');
		}

		public override void ExitTypeDeclaration(ExpressParser.TypeDeclarationContext context)
		{
			currentTypeInfo = null;
		}

		public override void ExitCollection(ExpressParser.CollectionContext context)
		{
			((CollectionInfo)currentTypeInfo).ValueType = TypeInfo.ToSystemType(context.atomicType().GetText());
		}

		public override void EnterArrayDecl(ExpressParser.ArrayDeclContext context)
		{
			var ci = ((CollectionInfo)currentTypeInfo);
			ci.Rank++;
			ci.CollectionType = CollectionType.Array;
			ci.Size = int.Parse(context.setParameters().Integer()[0].GetText());
		}

		public override void EnterSetDecl(ExpressParser.SetDeclContext context)
		{
			var ci = ((CollectionInfo)currentTypeInfo);
			ci.Rank++;
			ci.CollectionType = CollectionType.Set;
			ci.Size = int.Parse(context.setParameters().Integer()[0].GetText());
		}

		public override void EnterListDecl(ExpressParser.ListDeclContext context)
		{
			var ci = ((CollectionInfo)currentTypeInfo);
			ci.Rank++;
			ci.CollectionType = CollectionType.List;
			ci.Size = int.Parse(context.setParameters().Integer()[0].GetText());
		}

		public override void EnterEntityDeclaration(ExpressParser.EntityDeclarationContext context)
		{
			currentEntityInfo = new EntityDeclarationInfo(context.Identifier().GetText());
			Entities.Add(currentEntityInfo);
		}

		public override void ExitEntityDeclaration(ExpressParser.EntityDeclarationContext context)
		{
			currentEntityInfo = null;
		}

		public override void EnterInverseAttribute(ExpressParser.InverseAttributeContext context)
		{
			var attr = new AttributeDeclaration();

			TypeInfo typeInfo = null;
			var name = context.Identifier()[0].GetText();

			//COLLECTION
			if(context.collection() != null)
			{
				typeInfo = new CollectionInfo(name);
			}
			// DEFINED TYPE
			else if(context.Identifier()[1] != null)
			{
				typeInfo = new DefinedTypeInfo(name);
				typeInfo.ValueType = TypeInfo.ToSystemType(context.Identifier()[1].GetText());
			}

			attr.TypeInfo = typeInfo;
			currentTypeInfo = typeInfo;

			currentEntityInfo.Attributes.Add(attr);
		}

		public override void EnterAttribute(ExpressParser.AttributeContext context)
		{
			var attr = new AttributeDeclaration();
			string name = null;
			if(context.Identifier() != null)
			{
				name = context.Identifier().GetText();
			}
			else
			{
				name = context.path().GetText();
			}
			attr.IsOptional = context.OPTIONAL() != null;
			attr.TypeInfo = TypeInfoFromValueTypeContext(name, context.valueType());
			
			if(context.Parent is ExpressParser.DeriveDeclarationContext)
			{
				attr.IsDerived = true;
			}
			currentTypeInfo = attr.TypeInfo;

			currentEntityInfo.Attributes.Add(attr);
		}

		public override void ExitAttribute(ExpressParser.AttributeContext context)
		{
			currentTypeInfo = null;
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