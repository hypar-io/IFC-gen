using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;
using IFC4.Generators;

namespace Express
{
	public class ExpressListener : ExpressBaseListener
	{
		private ILanguageGenerator generator;

		private ITestGenerator testGenerator;

		private Dictionary<string,TypeData> typeData = new Dictionary<string,TypeData>();

		private Dictionary<string,FunctionData> functionData = new Dictionary<string, FunctionData>();

		public Dictionary<string,TypeData> TypeData{
			get{return typeData;}
		}

        public Dictionary<string, FunctionData> FunctionData 
		{ 
			get{return functionData;} 
		}

        private TypeData currTypeData;

		private List<AttributeData> currAttrDatas = new List<AttributeData>();

		public ExpressListener(ILanguageGenerator generator, ITestGenerator testGenerator)
		{
			this.generator = generator;
			this.testGenerator = testGenerator;
		}

		public override void EnterSchemaDecl(ExpressParser.SchemaDeclContext context)
		{
			
		}

		public override void ExitSchemaDecl(ExpressParser.SchemaDeclContext context)
		{	
			// Set the IsRelationshipReference on all attribute data.
			foreach(var td in typeData.Values.Where(td=>td is Entity).Cast<Entity>())
			{
				if(!td.Subs.Any())
				{
					continue;
				}
			}
		}

		public override void EnterTypeBody(ExpressParser.TypeBodyContext context)
		{
			var name = context.typeDef().SimpleId().GetText();

			TypeData td = null;
			if(context.typeSel().collectionType() != null)
			{
				td = new SimpleType(name, generator, testGenerator);
				((SimpleType)td).IsCollectionType = true;
			}
			else if(context.typeSel().simpleType() != null)
			{
				td = new SimpleType(name, generator, testGenerator);
				// The wrapped type will be discerned on exit so we can 
				// get it for collection types as well.
			}
			else if(context.typeSel().namedType() != null)
			{
				td = new SimpleType(name, generator, testGenerator);
				// The wrapped type will be discerned on exit so we can 
				// get it for collection types as well.
			}
			else if(context.typeSel().enumType() != null)
			{
				td = new EnumType(name, generator, testGenerator);
				((EnumType)td).Values = context.typeSel().enumType().enumValues().GetText().Split(',');
			}
			else if(context.typeSel().selectType() != null)
			{
				td = new SelectType(name, generator, testGenerator);
				((SelectType)td).Values = context.typeSel().selectType().selectValues().GetText().Split(',');
			}

			currTypeData = td;
			typeData.Add(name, td);
		}

		public override void ExitSimpleType(ExpressParser.SimpleTypeContext context)
		{
			if(currTypeData is SimpleType)
			{
				((SimpleType)currTypeData).WrappedType = ParseSimpleType(context);
			}
			else if(currTypeData is Entity)
			{
				foreach(var ad in currAttrDatas)
				{
					ad.Type = ParseSimpleType(context);
				}
			}
		}

		public override void ExitNamedType(ExpressParser.NamedTypeContext context)
		{
			string t = null;
			if(context.typeRef() != null)
			{
				t = context.typeRef().SimpleId().GetText();
			}
			else if(context.entityRef() != null)
			{
				t = context.entityRef().SimpleId().GetText();
			}

			if(currTypeData is SimpleType)
			{
				((SimpleType)currTypeData).WrappedType = t;
			}
			else if(currTypeData is Entity)
			{
				foreach(var ad in currAttrDatas)
				{
					ad.Type = t;
				}
			}
		}

		public override void ExitTypeBody(ExpressParser.TypeBodyContext context)
		{
			currTypeData = null;
		}

		public override void EnterCollectionType(ExpressParser.CollectionTypeContext context)
		{
			if(context.Parent.Parent is ExpressParser.TypeBodyContext)
			{
				var simple = (SimpleType)currTypeData;
				simple.IsCollectionType = true;
				simple.Rank ++;
			}

			if(currAttrDatas.Any())
			{
				foreach(var ad in currAttrDatas)
				{
					ad.IsCollection = true;
					ad.Rank ++;
				}
			}
		}

		private string ParseSimpleType(ExpressParser.SimpleTypeContext context)
		{
			return generator.ParseType(context);
		}

		public override void EnterEntityHead(ExpressParser.EntityHeadContext context)
		{
			var name = context.entityDef().SimpleId().GetText();

			if(typeData.ContainsKey(name))
			{
				currTypeData = (Entity)typeData[name];
			}
			else
			{
				currTypeData = new Entity(name, generator, testGenerator);
				typeData.Add(name, currTypeData);
			}
		}

		public override void EnterSupertypeDecl(ExpressParser.SupertypeDeclContext context)
		{
			((Entity)currTypeData).IsAbstract = context.ABSTRACT() != null;
			var factor = context.supertypeExpr().supertypeFactor();
			
			// IFC: Use choice only.
			if(factor[0].choice() != null)
			{
				foreach(var superRef in factor[0].choice().supertypeExpr())
				{
					var name = superRef.supertypeFactor()[0].entityRef().SimpleId().GetText();
					Entity tdSuper = null;
					if(typeData.ContainsKey(name))
					{
						tdSuper = (Entity)typeData[name];
					}
					else
					{
						tdSuper = new Entity(name, generator, testGenerator);
						typeData.Add(name, tdSuper);
					}
					((Entity)currTypeData).Supers.Add(tdSuper);
				}
			}
		}

		public override void EnterSubtypeDecl(ExpressParser.SubtypeDeclContext context)
		{
			foreach(var subRef in context.entityRef())
			{
				var name = subRef.SimpleId().GetText();
				Entity tdSub = null;
				if(typeData.ContainsKey(name))
				{
					tdSub = (Entity)typeData[name];
				}
				else
				{
					tdSub = new Entity(name, generator, testGenerator);
					typeData.Add(name, tdSub);
				}
				((Entity)currTypeData).Subs.Add(tdSub);
			}
		}

		public override void EnterExplDef(ExpressParser.ExplDefContext context)
		{
			var cad = new AttributeData(generator);
			cad.IsOptional = context.OPTIONAL() != null;
			currAttrDatas.Add(cad);
			((Entity)currTypeData).Attributes.Add(cad);
		}

		public override void EnterDeriveDef(ExpressParser.DeriveDefContext context)
		{
			var cad = new AttributeData(generator);
			cad.IsDerived = true;
			currAttrDatas.Add(cad);
			((Entity)currTypeData).Attributes.Add(cad);
		}

		public override void EnterInverseDef(ExpressParser.InverseDefContext context)
		{
			var cad = new AttributeData(generator);
			cad.IsInverse = true;
			currAttrDatas.Add(cad);
			((Entity)currTypeData).Attributes.Add(cad);
		}

		public override void EnterInverseType(ExpressParser.InverseTypeContext context){
			foreach(var ad in currAttrDatas)
			{
				ad.IsCollection = true;
				ad.Rank ++;
			}
		}

		public override void EnterEntityRef(ExpressParser.EntityRefContext context)
		{
			foreach(var ad in currAttrDatas){
				ad.Type = context.SimpleId().GetText();
			}
		}

		public override void EnterAttrDef(ExpressParser.AttrDefContext context)
		{
			if(context.SimpleId() != null)
			{
				currAttrDatas.Last().Name = context.SimpleId().GetText();
			}
			else if(context.Path() != null)
			{
				currAttrDatas.Last().Name = context.Path().GetText();
			}
		}

		public override void ExitExplDef(ExpressParser.ExplDefContext context)
		{
			currAttrDatas.Clear();
		}

		public override void ExitDeriveDef(ExpressParser.DeriveDefContext context)
		{
			currAttrDatas.Clear();
		}

		public override void ExitInverseDef(ExpressParser.InverseDefContext context)
		{
			currAttrDatas.Clear();
		}

		public override void ExitEntityDecl(ExpressParser.EntityDeclContext context)
		{
			currTypeData = null;
		}

		public override void EnterFuncHead(ExpressParser.FuncHeadContext context)
		{
			var name = context.funcDef().SimpleId().GetText();
			functionData.Add(context.funcDef().SimpleId().GetText(), new Express.FunctionData(name));
		}
	}
}