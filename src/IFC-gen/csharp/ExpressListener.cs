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

		public List<SelectInfo> Selects{get;set;}

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
			Selects = new List<SelectInfo>();
		}

		private TypeInfo TypeInfoFromTypeSelContext(string name, ExpressParser.TypeSelContext ctx)
		{
			TypeInfo typeInfo = null;
			// ENUMERATION
			if(ctx.enumType() != null)
			{
				typeInfo = new EnumInfo(name);
			}
			//SELECT
			else if(ctx.selectType() != null)
			{
				typeInfo = new SelectInfo(name);
				Selects.Add((SelectInfo)typeInfo);
			}
			//COLLECTION
			else if(ctx.collectionType() != null)
			{
				typeInfo = new CollectionInfo(name);
			}
			// SIMPLE TYPE or NAMED TYPE
			else if(ctx.simpleType() != null || ctx.namedType() != null)
			{
				typeInfo = new DefinedTypeInfo(name);
				typeInfo.ValueType = TypeInfo.ToSystemType(ctx.simpleType().GetText());
			}
			return typeInfo;
		}

		private TypeInfo TypeInfoFromCollectionTypeSelContext(string name, ExpressParser.CollectionTypeSelContext ctx)
		{
			TypeInfo typeInfo = null;
			//COLLECTION
			if(ctx.collectionType() != null)
			{
				typeInfo = new CollectionInfo(name);
			}
			// SIMPLE TYPE or NAMED TYPE
			else if(ctx.simpleType() != null || ctx.namedType() != null)
			{
				typeInfo = new DefinedTypeInfo(name);
				typeInfo.ValueType = TypeInfo.ToSystemType(ctx.simpleType().GetText());
			}
			return typeInfo;
		}

		public override void EnterTypeBody(ExpressParser.TypeBodyContext context)
		{
			currentTypeInfo = TypeInfoFromTypeSelContext(context.typeDef().SimpleId().GetText(),context.typeSel());
			Types.Add(new TypeDeclaration(currentTypeInfo));
		}

		public override void EnterEnumType(ExpressParser.EnumTypeContext context)
		{
			((EnumInfo)currentTypeInfo).Values = context.enumValues().GetText().Split(',');
		}

		public override void EnterSelectType(ExpressParser.SelectTypeContext context)
		{
			((SelectInfo)currentTypeInfo).Values = context.selectValues().GetText().Split(',');
		}

		public override void ExitTypeDecl(ExpressParser.TypeDeclContext context)
		{
			currentTypeInfo = null;
		}

		public override void ExitCollectionType(ExpressParser.CollectionTypeContext context)
		{
			((CollectionInfo)currentTypeInfo).ValueType = TypeInfo.ToSystemType(context.atomicType().GetText());
		}

		public override void EnterArrayType(ExpressParser.ArrayTypeContext context)
		{
			var ci = ((CollectionInfo)currentTypeInfo);
			ci.Rank++;
			ci.CollectionType = CollectionType.Array;
			ci.Size = int.Parse(context.boundSpec().bound2().numberExpr().GetText());
		}

		public override void EnterSetType(ExpressParser.SetTypeContext context)
		{
			var ci = ((CollectionInfo)currentTypeInfo);
			ci.Rank++;
			ci.CollectionType = CollectionType.Set;
			ci.Size = int.Parse(context.boundSpec().bound2().GetText());
		}

		public override void EnterListType(ExpressParser.ListTypeContext context)
		{
			var ci = ((CollectionInfo)currentTypeInfo);
			ci.Rank++;
			ci.CollectionType = CollectionType.List;
			ci.Size = int.Parse(context.boundSpec().bound2().GetText());
		}

		public override void EnterEntityDecl(ExpressParser.EntityDeclContext context)
		{
			currentEntityInfo = new EntityDeclarationInfo(context.entityHead().entityDef().SimpleId().GetText());
			Entities.Add(currentEntityInfo);
		}

		public override void ExitEntityDecl(ExpressParser.EntityDeclContext context)
		{
			currentEntityInfo = null;
		}

		public override void EnterInverseDef(ExpressParser.InverseDefContext context)
		{
			var attr = new AttributeDeclaration();

			TypeInfo typeInfo = null;
			var name = context.attrDef().SimpleId().GetText();

			if(context.inverseType().boundSpec() != null)
			{
				typeInfo = new CollectionInfo(name);
				typeInfo.ValueType = context.attrRef().SimpleId().GetText();
			}

			attr.TypeInfo = typeInfo;
			currentTypeInfo = typeInfo;

			currentEntityInfo.Attributes.Add(attr);
		}

		public override void EnterExplDef(ExpressParser.ExplDefContext context)
		{
			// Multiple attributes may be defined.
			// Ex: thing1,thing2,thing3 : STRING

			foreach(var attrDef in context.attrDef())
			{
				var ad = new AttributeDeclaration();
				ad.IsOptional = context.OPTIONAL() != null;
				ad.TypeInfo = TypeInfoFromCollectionTypeSelContext(attrDef.SimpleId().GetText(), context.collectionTypeSel());
				currentTypeInfo = ad.TypeInfo;
				currentEntityInfo.Attributes.Add(ad);
			}
		}

		public override void EnterDeriveDef(ExpressParser.DeriveDefContext context)
		{
			var ad = new AttributeDeclaration();
			ad.IsDerived = true;
			ad.TypeInfo = TypeInfoFromCollectionTypeSelContext(context.attrDef().SimpleId().GetText(), context.collectionTypeSel());
			currentTypeInfo = ad.TypeInfo;
			currentEntityInfo.Attributes.Add(ad);
		}

		public override void ExitExplDef(ExpressParser.ExplDefContext context)
		{
			currentTypeInfo = null;
		}

		public override void ExitDeriveDef(ExpressParser.DeriveDefContext context)
		{
			currentTypeInfo = null;
		}

		public override void EnterSupertypeDecl(ExpressParser.SupertypeDeclContext context)
		{
			if(context.ABSTRACT() != null)
			{
				currentEntityInfo.IsAbstract = true;
			}

			if(context.supertypeExpr().supertypeFactor()[0].entityRef() != null)
			{

			}
			else if (context.supertypeExpr().supertypeFactor()[0].choice() != null)
			{
				currentEntityInfo.SupertypeOf.AddRange(context.supertypeExpr().supertypeFactor()[0].choice().supertypeExpr().GetText().Split(','));

			}
		}

		public override void EnterSubtypeDecl(ExpressParser.SubtypeDeclContext context)
		{
			//currentEntityInfo.SubtypeOf.AddRange(context.oneOf().idList().GetText().Split(','));
		}
	}
}