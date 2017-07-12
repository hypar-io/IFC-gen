using System;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;

namespace Express
{
	public class ClassInfo
	{
		public string Name {get;set;}
		public string BaseType {get;set;}
		public Dictionary<string,Type> Properties{get;set;}
		public ClassInfo(string name)
		{
			Name = name;
			Properties = new Dictionary<string, Type>();
		}
	}

	public class EnumInfo
	{
		public string Name{get;set;}
		public List<string> Values{get;set;}
		public EnumInfo(string name)
		{
			Name = name;
			Values = new List<string>();
		}
	}

	public class ExpressListener : ExpressBaseListener
	{
		public Dictionary<string, ClassInfo> ClassInfoMap {get;set;}
		public Dictionary<string, EnumInfo> EnumInfoMap {get;set;}

		private ClassInfo currentClassInfo;
		private EnumInfo currentEnumInfo;

		public ExpressListener()
		{
			ClassInfoMap = new Dictionary<string, ClassInfo>();
			EnumInfoMap = new Dictionary<string, EnumInfo>();
		}

		public override void EnterType_name(ExpressParser.Type_nameContext context){
			Console.Write(context.GetText());
		}

		public override void EnterValue_type([NotNull] ExpressParser.Value_typeContext context) 
		{ 	
			Console.WriteLine(" : " + context.GetText());
		}

		public override void ExitValue_type(ExpressParser.Value_typeContext context)
		{
			Console.WriteLine();
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
			currentClassInfo = new ClassInfo(context.GetText());
			ClassInfoMap.Add(currentClassInfo.Name, currentClassInfo);
		}

		public override void EnterAttribute_name(ExpressParser.Attribute_nameContext context) 
		{ 
			Console.Write("\t" + context.GetText());
		}

		public override void EnterSupertype_name(ExpressParser.Supertype_nameContext context)
		{
			//Console.Write(" : " + context.GetText());
		}

		public override void EnterSubtype_name(ExpressParser.Subtype_nameContext context)
		{
			currentClassInfo.BaseType = context.GetText();
		}
	}
}