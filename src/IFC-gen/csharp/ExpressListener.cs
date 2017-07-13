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

		public override void EnterTypeName(ExpressParser.TypeNameContext context){
			Console.Write(context.GetText());
		}

		public override void EnterValueType([NotNull] ExpressParser.ValueTypeContext context) 
		{ 	
			Console.WriteLine(" : " + context.GetText());
		}

		public override void ExitValueType(ExpressParser.ValueTypeContext context)
		{
			Console.WriteLine();
		}

		public override void EnterEnumIdList(ExpressParser.EnumIdListContext context)
		{
			Console.WriteLine("\t" + context.GetText());
		}

		public override void EnterSelectIdList(ExpressParser.SelectIdListContext context)
		{
			Console.WriteLine("\t" + context.GetText());
		}

		public override void ExitTypeDeclaration(ExpressParser.TypeDeclarationContext context)
		{
			Console.WriteLine();
		}

		public override void EnterEntityName(ExpressParser.EntityNameContext context)
		{
			currentClassInfo = new ClassInfo(context.GetText());
			ClassInfoMap.Add(currentClassInfo.Name, currentClassInfo);
		}

		public override void EnterAttributeName(ExpressParser.AttributeNameContext context) 
		{ 
			Console.Write("\t" + context.GetText());
		}

		public override void EnterSupertypeName(ExpressParser.SupertypeNameContext context)
		{
			//Console.Write(" : " + context.GetText());
		}

		public override void EnterSubtypeName(ExpressParser.SubtypeNameContext context)
		{
			currentClassInfo.BaseType = context.GetText();
		}
	}
}