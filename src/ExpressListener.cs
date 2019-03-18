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

		private Dictionary<string,TypeData> typeData = new Dictionary<string,TypeData>();

		private Dictionary<string,FunctionData> funcData = new Dictionary<string, FunctionData>();

		public Dictionary<string,TypeData> TypeData{
			get{return typeData;}
		}

		public Dictionary<string,FunctionData> FunctionData{
			get{return funcData;}
		}

		public ExpressListener(ILanguageGenerator generator)
		{
			this.generator = generator;
		}

		public override void EnterSchemaDecl(ExpressParser.SchemaDeclContext context)
		{
			
		}

		// TYPE
		public override void EnterTypeBody(ExpressParser.TypeBodyContext context)
		{
			var name = context.typeDef().SimpleId().GetText();

			TypeData td = null;
			int rank = 0;
			bool returnsCollection = false;
			var isGeneric = false;

			if(context.typeSel().collectionType() != null)
			{
				var wrappedType = ParseCollectionType(context.typeSel().collectionType(), ref rank, ref returnsCollection, ref isGeneric);
				td = new WrapperType(name, wrappedType, generator, returnsCollection, rank);
			}
			else if(context.typeSel().simpleType() != null)
			{	
				var wrappedType = ParseSimpleType(context.typeSel().simpleType());
				td = new WrapperType(name, wrappedType, generator, returnsCollection, rank);
			}
			else if(context.typeSel().namedType() != null)
			{
				var wrappedType = ParseNamedType(context.typeSel().namedType());
				td = new WrapperType(name, wrappedType, generator, returnsCollection, rank);
			}
			else if(context.typeSel().enumType() != null)
			{
				var values = context.typeSel().enumType().enumValues().GetText().Split(',');
				td = new EnumType(name, generator, values);
			}
			else if(context.typeSel().selectType() != null)
			{
				var values = context.typeSel().selectType().selectValues().GetText().Split(',');
				td = new SelectType(name, generator, values);
			}

			typeData.Add(name, td);
		}

		// ENTITY
		public override void EnterEntityDecl(ExpressParser.EntityDeclContext context)
		{
			Entity entity;
			var entityName = context.entityHead().entityDef().SimpleId().GetText();

			if(typeData.ContainsKey(entityName))
			{	
				// TypeData was created previously possible as a reference
				// to a sub or super type.
				entity = (Entity)typeData[entityName];
			}
			else{
				entity = new Entity(entityName, generator);
				typeData.Add(entityName, entity);
			}

			var subSuper = context.entityHead().subSuper();

			// SUPERTYPE
			if(subSuper.supertypeDecl() != null)
			{
				var super = subSuper.supertypeDecl();
				entity.IsAbstract = super.ABSTRACT() != null;
				var factor = super.supertypeExpr().supertypeFactor();
				
				// IFC: Use choice only.
				if(factor[0].choice() != null)
				{
					foreach(var superRef in factor[0].choice().supertypeExpr())
					{
						var superName = superRef.supertypeFactor()[0].entityRef().SimpleId().GetText();
						Entity sup;
						if(typeData.ContainsKey(superName))
						{
							sup = (Entity)typeData[superName];
						}
						else
						{
							sup = new Entity(superName, generator);
							typeData.Add(superName, sup);
						}
						entity.Supers.Add(sup);
					}
				}
			}

			// SUBTYPE
			if(subSuper.subtypeDecl() != null)
			{
				foreach(var subRef in subSuper.subtypeDecl().entityRef())
				{
					var subName = subRef.SimpleId().GetText();
					Entity sub;
					if(typeData.ContainsKey(subName))
					{
						sub = (Entity)typeData[subName];
					}
					else
					{
						sub = new Entity(subName, generator);
						typeData.Add(subName, sub);
					}
					entity.Subs.Add(sub);
				}
			}

			if(context.entityBody().attributes() != null)
			{
				var attrs = context.entityBody().attributes();
				foreach(var expl in attrs.explicitClause())
				{
					if(expl.explDef() != null)
					{
						var optional = expl.explDef().OPTIONAL() != null;
						foreach(var attrDef in expl.explDef().attrDef())
						{
							var rank = 0;
							var isCollection = false;
							var name = "";
							var isGeneric = false;
							if(attrDef.SimpleId() != null)
							{
								name = attrDef.SimpleId().GetText();
							}
							else if(attrDef.Path() != null)
							{
								name = attrDef.Path().GetText();
							}
							var type = ParseCollectionTypeSel(expl.explDef().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
							var ad = new AttributeData(generator, name, type, rank, isCollection, isGeneric, false, optional, false);
							entity.Attributes.Add(ad);

							if(ad.Type == null)
							{
								throw new Exception($"The Type of attribute data, {ad.Name}, is null.");
							}
						}
					}
					else if(expl.explRedef() != null)
					{
						var rank = 0;
						var isCollection = false;
						var name = "";
						var attrRef = expl.explRedef().attrRef();
						var isGeneric = false;
						if(attrRef.SimpleId() != null)
						{
							name = attrRef.SimpleId().GetText();
						}
						else if (attrRef.Path() != null)
						{
							name = attrRef.Path().GetText();
						}
						var optional = expl.explRedef().OPTIONAL() != null;
						var type = ParseCollectionTypeSel(expl.explRedef().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
						var ad = new AttributeData(generator, name, type, rank, isCollection, isGeneric, false, optional, false);
						entity.Attributes.Add(ad);

						if(ad.Type == null)
						{
							throw new Exception($"The Type of attribute data, {ad.Name}, is null.");
						}
					}
				}

				// DERIVE
				foreach(var der in attrs.deriveClause())
				{
					foreach(var derAttr in der.derivedAttr())
					{
						var name = "";
						var rank = 0;
						bool isCollection = false;
						bool isGeneric = false;
						if(derAttr.deriveDef() != null)
						{
							if(derAttr.deriveDef().attrDef().SimpleId() != null)
							{
								name = derAttr.deriveDef().attrDef().SimpleId().GetText();
							}
							else if(derAttr.deriveDef().attrDef().Path() != null)
							{
								name = derAttr.deriveDef().attrDef().Path().GetText();
							}
							var type = ParseCollectionTypeSel(derAttr.deriveDef().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
							var ad = new AttributeData(generator, name, type, rank, isCollection, isGeneric, true, false, false);
							entity.Attributes.Add(ad);
						}
						else if(derAttr.derivedRedef() != null)
						{
							if(derAttr.derivedRedef().attrRef().SimpleId() != null)
							{
								name = derAttr.derivedRedef().attrRef().SimpleId().GetText();
							}
							else if(derAttr.derivedRedef().attrRef().Path() != null)
							{
								name = derAttr.derivedRedef().attrRef().Path().GetText();
							}
							var type = ParseCollectionTypeSel(derAttr.derivedRedef().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
							var ad = new AttributeData(generator, name, type, rank, isCollection, isGeneric, true, false, false);
							entity.Attributes.Add(ad);
						}
					}
					
				}

				// INVERSE
				foreach(var inv in attrs.inverseClause())
				{
					foreach(var invAttr in inv.inverseAttr())
					{
						var name = "";
						var rank = 0;
						bool isCollection = false;
						bool optional = false;
						bool inverse = true;

						if(invAttr.inverseDef() != null)
						{
							if(invAttr.inverseDef().attrDef().SimpleId() != null)
							{
								name = invAttr.inverseDef().attrDef().SimpleId().GetText();
							}
							else if(invAttr.inverseDef().attrDef().Path() != null)
							{
								name = invAttr.inverseDef().attrDef().Path().GetText();
							}
							var type = ParseInverseType(invAttr.inverseDef().inverseType(), ref isCollection, ref rank);
							var ad = new AttributeData(generator, name, type, rank, isCollection, false, false, optional, inverse);
							entity.Attributes.Add(ad);
						}
						else if(invAttr.inverseRedef() != null)
						{
							if(invAttr.inverseRedef().attrRef()[0].SimpleId() != null)
							{
								name = invAttr.inverseRedef().attrRef()[0].SimpleId().GetText();
							}
							else if(invAttr.inverseRedef().attrRef()[0].Path() != null)
							{
								name = invAttr.inverseRedef().attrRef()[0].Path().GetText();
							}
							var type = ParseInverseType(invAttr.inverseRedef().inverseType(), ref isCollection, ref rank);
							var ad = new AttributeData(generator, name, type, rank, isCollection, false, false, optional, inverse);
							entity.Attributes.Add(ad);
						}
					}
				}
			}

			if(entity.Attributes.Any(a=>a.IsCollection && a.Rank == 0))
			{
				throw new Exception("I found an attribute with IsCollection=true, but a rank of 0.");
			}

			if(entity.Attributes.Any(a=>a.IsInverse && a.IsOptional))
			{
				throw new Exception("I found an attribute with IsInverse=true, but marked as not optional.");
			}
		}

		// FUNCTION
		public override void EnterFuncHead(ExpressParser.FuncHeadContext context)
		{
			var fName = context.funcDef().SimpleId().GetText();
			var fCollection = false;
			var fRank = 0;
			var fGeneric = false;
			var fType = "";

			// Parse the return type
			if(context.returnTypeChoice().allTypeSel() != null)
			{
				fType = ParseAllTypeSel(context.returnTypeChoice().allTypeSel(), ref fCollection, ref fGeneric);
			}
			else if(context.returnTypeChoice().collectionType() != null)
			{
				fType = ParseCollectionType(context.returnTypeChoice().collectionType(), ref fRank, ref fCollection, ref fGeneric);
			}

			var parameters = new List<ParameterData>();

			foreach(var formalParam in context.formalParams())
			{
				foreach(var p in formalParam.formalParam())
				{
					var pCollection = false;
					var pGeneric = false;
					var pRank = 0;
					var pType = "";
				
					if(p.returnTypeChoice().allTypeSel() != null)
					{
						pType = ParseAllTypeSel(p.returnTypeChoice().allTypeSel(), ref pCollection, ref pGeneric);
					}
					else if(p.returnTypeChoice().collectionType() != null)
					{
						pType = ParseCollectionType(p.returnTypeChoice().collectionType(), ref pRank, ref pCollection, ref pGeneric);
					}
					foreach(var def in p.paramDef())
					{
						var pName = def.SimpleId().GetText();
						parameters.Add(new ParameterData(generator, pName, pCollection, pRank, pGeneric, pType));
					}
				}
			}

			var returnType = new TypeReference(generator, fType, fCollection, fRank, fGeneric);
			var fd =  new Express.FunctionData(fName, returnType, parameters);
			funcData.Add(context.funcDef().SimpleId().GetText(), fd);
		}

		private string ParseInverseType(ExpressParser.InverseTypeContext context, ref bool isCollection, ref int rank)
		{
			if(context.SET() != null || context.BAG() != null)
			{
				isCollection = true;
				rank++;
			}
			return context.entityRef().SimpleId().GetText();
		}

		private string ParseAllTypeSel(ExpressParser.AllTypeSelContext context, ref bool isCollection, ref bool isGeneric)
		{
			if(context.simpleType() != null)
			{
				return ParseSimpleType(context.simpleType());
			}
			else if(context.namedType() != null)
			{
				if(context.namedType().typeRef() != null)
				{
					return context.namedType().typeRef().SimpleId().GetText();
				}
				else if(context.namedType().entityRef() != null)
				{
					return context.namedType().entityRef().SimpleId().GetText();
				}
			}
			else if(context.pseudoType() != null)
			{
				if(context.pseudoType().genericType() != null)
				{
					isGeneric = true;
					return "";
					// TODO: Although we don't support Functions, this breaks in IFC2X3. Figure out why.
					// return context.pseudoType().genericType().typeLabel().SimpleId().GetText();
				}
			}
			else if(context.aggregateType() != null)
			{
				// not used in IFC
				throw new NotImplementedException();
			}
			else if(context.conformantType() != null)
			{
				return ParseConformantType(context.conformantType(), ref isCollection, ref isGeneric);
			}

			throw new Exception($"I could not parse the all type selection with context: {context.GetText()}");
		}

		private string ParseConformantType(ExpressParser.ConformantTypeContext context, ref bool isCollection, ref bool isGeneric)
		{
			if(context.conformantArray() != null)
			{
				return ParseAllTypeSel(context.conformantArray().allTypeSel(), ref isCollection, ref isGeneric);
			}
			else if(context.conformantBag() != null)
			{
				return ParseAllTypeSel(context.conformantBag().allTypeSel(), ref isCollection, ref isGeneric);
			}
			else if(context.conformantList() != null)
			{
				return ParseAllTypeSel(context.conformantList().allTypeSel(), ref isCollection, ref isGeneric);
			}
			else if(context.conformantSet() != null)
			{
				return ParseAllTypeSel(context.conformantSet().allTypeSel(), ref isCollection, ref isGeneric);
			}

			throw new Exception($"I could not parse the conformant type with context: {context.GetText()}");
		}

		private string ParseSimpleType(ExpressParser.SimpleTypeContext context)
		{
			return generator.ParseSimpleType(context);
		}

		private string ParseNamedType(ExpressParser.NamedTypeContext context)
		{
			if(context.typeRef() != null)
			{
				return context.typeRef().SimpleId().GetText();
			}
			else if(context.entityRef() != null)
			{
				return context.entityRef().SimpleId().GetText();
			}

			return null;
		}

		private string ParseCollectionType(ExpressParser.CollectionTypeContext context, ref int rank, ref bool isCollection, ref bool isGeneric)
		{
			rank++;
			isCollection = true;
			
			if(context.arrayType() != null)
			{	
				return ParseCollectionTypeSel(context.arrayType().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
			}
			else if(context.listType() != null)
			{
				return ParseCollectionTypeSel(context.listType().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
			}
			else if(context.setType() != null)
			{
				return ParseCollectionTypeSel(context.setType().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
			}
			else if(context.bagType() != null)
			{
				return ParseCollectionTypeSel(context.bagType().collectionTypeSel(), ref rank, ref isCollection, ref isGeneric);
			}

			throw new Exception("I could not parse the collection type.");
		}

		private string ParseCollectionTypeSel(ExpressParser.CollectionTypeSelContext context, ref int rank, ref bool isCollection, ref bool isGeneric)
		{
			if(context.collectionType() != null)
			{	
				return ParseCollectionType(context.collectionType(), ref rank, ref isCollection, ref isGeneric);
			}
			else if(context.simpleType() != null)
			{
				return ParseSimpleType(context.simpleType());
			}
			else if(context.namedType() != null)
			{
				return ParseNamedType(context.namedType());
			}
			else if(context.genericType() != null)
			{
				isGeneric = true;
				return "T";
			}

			throw new Exception($"I could not parse te collection type selection with context: {context.GetText()}");
		}
	}
}