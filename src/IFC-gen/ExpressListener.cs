using System;
using System.Linq;
using Antlr4.Runtime.Misc;

namespace Express
{
	public class IFCListener : ExpressBaseListener
	{
		public override void EnterType_declaration(ExpressParser.Type_declarationContext context)
		{
			//Console.Write(context.GetText());
		}

		public override void EnterType_name(ExpressParser.Type_nameContext context){
			Console.WriteLine(context.GetText());
		}

		public override void EnterValue_type([NotNull] ExpressParser.Value_typeContext context) 
		{ 	
			if(context.Parent is ExpressParser.AttributeContext){
				Console.WriteLine("\t\t" + context.GetText());
			}
			else
			{
				Console.WriteLine("\t" + context.GetText());
			}
		}

		public override void EnterEnum_id_list(ExpressParser.Enum_id_listContext context)
		{
			Console.WriteLine("\t" + context.GetText());
		}

		public override void EnterSelect_id_list(ExpressParser.Select_id_listContext context)
		{
			Console.WriteLine("\t" + context.GetText());
		}

		public override void ExitType_declaration(ExpressParser.Type_declarationContext context)
		{
			Console.WriteLine();
		}

		public override void EnterEntity_name(ExpressParser.Entity_nameContext context)
		{
			Console.WriteLine(context.GetText());
		}

		public override void EnterAttribute_name(ExpressParser.Attribute_nameContext context) 
		{ 
			Console.WriteLine("\t" + context.GetText());
		}
	}
}