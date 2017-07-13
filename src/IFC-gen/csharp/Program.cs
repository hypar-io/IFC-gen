using System;
using System.Collections.Generic;
using System.Reflection;
using System.IO;
using System.Linq;
using Antlr4.Runtime;
using Antlr4.Runtime.Tree;

namespace IFC.Generate
{

	internal static class TypeExtensions{
		internal static string ValidTypeName(this Type t){
			string result = t.Name;
			if((t.Name.StartsWith("Ifc") || t.Name.StartsWith("ifc")) && t.Name != "IfcSystem" && t.Name != "IfcObject"){
				result = t.Name.Remove(0,3);
			}

			/*if(t.Name.EndsWith("wrapper")){
				result = result.Remove(result.Length-7);
			}
			if(t.Name.EndsWith("wrapper[]")){
				result = result.Remove(result.Length-9);
			}*/
			return result;
		}

		internal static string ValidParameterName(this string s){
			var result = s.First().ToString().ToLower() + String.Join("", s.Skip(1));
				
			// Avoid properties named with reserved words.
			if(result == "ref")
			{
				result = "reference";
			}

			if(result == "operator")
			{
				result = "op";
			}

			/*if(result.EndsWith("wrapper")){
				result = result.Remove(result.Length-7);
			}*/

			return result;
		}

		internal static string ValidPropertyName(this PropertyInfo pi){

			var result = pi.Name;

			/*if(result.EndsWith("wrapper")){
				result = result.Remove(result.Length-7);
			}*/

			if(pi.DeclaringType.ValidTypeName() == result){
				return result + "Property";
			}
			return result;
		}

		/// <summary>
		/// Create a string containing the parameters to the base type constructor for a Type.
		/// </summary>
		/// <returns></returns>
		internal static string BaseParameterString(this Type t){
			if(t.GetTypeInfo().BaseType == null){
				return string.Empty;
			}
			return string.Join(",\n\t\t\t\t", t.ValidBaseProperties().Select(p=>$"{p.Name.ValidParameterName()}"));
		}

		/// <summary>
		/// Create a string containing the parameters for a Type.
		/// </summary>
		/// <returns></returns>
		internal static string ParameterString(this Type t){
			return string.Join(",\n\t\t\t\t", t.ValidProperties().Concat(t.ValidBaseProperties()).Select(i=>$"{i.PropertyType.ValidTypeName()} {i.Name.ValidParameterName()}"));
		}

		internal static PropertyInfo[] ValidProperties(this Type t){
			return t.GetProperties().Where(p=> p.DeclaringType == t && !p.Name.EndsWith("Specified")).ToArray();
		}

		internal static PropertyInfo[] ValidBaseProperties(this Type t){
			return t.GetProperties().Where(p=> p.DeclaringType != t && 
						p.DeclaringType.Name != "Entity" &&
						p.DeclaringType.Name != "IfcRoot" && 
						!p.Name.EndsWith("Specified")).ToArray();
		}

		/// <summary>
		/// Create a string containing the inherited parameters.
		/// </summary>
		/// <returns></returns>
		internal static string InheritedParameterString(this Type t){
			if(t.GetTypeInfo().BaseType == null){
				return string.Empty;
			}
			return string.Join(",\n\t\t\t\t", t.ValidBaseProperties().Select(i=>$"{i.PropertyType.ValidTypeName()} {i.Name.ValidParameterName()}"));
		}

				/// <summary>
		/// Create a multi-line string assigning parameters to properties.
		/// </summary>
		/// <returns></returns>
		internal static string FieldAssignments(this Type t){
			var fieldAssignments = string.Join(";\n", t.ValidProperties().Select(i=>$"\t\t\tthis.{i.ValidPropertyName()} = {i.Name.ValidParameterName()}"));
			return fieldAssignments + ";";
		}

		internal static string CapitalizeFirstLetter(this string s){
			return s.First().ToString().ToUpper() + String.Join("", s.Skip(1));
		}

		internal static string PropertiesString(this Type t){
			return string.Join("\n\n", t.ValidProperties().Select(i=>i.ToPropertyDeclaration()));
		}

		internal static string ToPropertyDeclaration(this PropertyInfo p){
			var propertyDecl = $"\t\tpublic {p.PropertyType.ValidTypeName()} {p.ValidPropertyName()} {{get;internal set;}}";
			return propertyDecl;
		}

		internal static Type[] ValidTypes(this Assembly asm){
			return asm.GetTypes().Where(t=>t.GetTypeInfo().IsPublic && t.Name != "Entity" && t.Name != "IfcRoot").ToArray();
		}

		internal static bool IsRelationship(this PropertyInfo pi){
			return pi.Name.StartsWith("Rel") || 
			pi.Name.EndsWith("By");
		}

		/// <summary>
		/// Create a string representing the definition of the class.
		/// </summary>
		/// <returns></returns>
		internal static string CSharpClassDefinition(this Type t){
			
			var isInherited = t.GetTypeInfo().BaseType != null;

			var classSignature = isInherited && t.GetTypeInfo().BaseType != typeof(object)?
				$"{t.ValidTypeName()} : {t.GetTypeInfo().BaseType.ValidTypeName()}":
				$"{t.ValidTypeName()}";
			
			var parameterString = isInherited?
				t.ParameterString():
				$"{t.ParameterString()}, {t.InheritedParameterString()}";
			
			var constructorSignature = t.GetTypeInfo().BaseType != null && t.GetTypeInfo().BaseType != typeof(object)?
				$"({parameterString}) : base({t.BaseParameterString()})":
				$"({parameterString})";
			
			var classModifier = t.GetTypeInfo().IsAbstract? "abstract" : string.Empty;

			// The 'wrapper' suffix is a biproduct of c# code generation
			// from the xsd. The correct name does not include 'wrapper'.
			var helpName = t.Name.EndsWith("wrapper")?
				t.Name.ToLower().Remove(t.Name.ToLower().Length-7):
				t.Name.ToLower();
			
			var classStr = 
$@"/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{{
	/// <summary>
	/// <see href=""http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{helpName}.htm""/>
	/// </summary>
	public {classModifier} partial class {classSignature} 
	{{
{t.PropertiesString()}

		public {t.ValidTypeName()}{constructorSignature}
		{{
{t.FieldAssignments()}
		}}
	}}
}}";
			return classStr;
		}

		internal static string CSharpEnumDefinition(this Type t){
			
			var enumNames = string.Join(",\n\t\t",t.GetTypeInfo().GetEnumNames().Select(n=>n.ToUpper()));
			var enumStr =
$@"/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{{
	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{t.Name.ToLower()}.htm
	/// </summary>
	public enum {t.ValidTypeName()} 
	{{
		{enumNames}
	}}
}}";
		return enumStr;

		}
	}

	class Program
	{
		static void Main(string[] args)
		{
			/*if(args.Length != 2)
			{
				Console.WriteLine("Usage: IFC-dotnet-generate.exe <path to IFC dll> <output directory>");
				return;
			}

			if(!File.Exists(args[0]))
			{
				Console.WriteLine("The specified file does not exist.");
				return;
			}

			if(!Directory.Exists(args[1]))
			{
				Console.WriteLine("The specified output directory does not exist.");
			}

			var asm = Assembly.LoadFrom(args[0]);
			var types = asm.GetTypes().Where(t=>t.IsPublic);
			foreach (var t in asm.ValidTypes())
			{
				var csPath = Path.Combine(args[1], $"{t.ValidTypeName()}.cs");
				File.WriteAllText(csPath, t.IsEnum? t.CSharpEnumDefinition() : t.CSharpClassDefinition());
			}*/

			//Stream inputStream = Console.OpenStandardInput();
			using (FileStream fs = new FileStream(args[0], FileMode.Open))
			{
				var input = new AntlrInputStream(fs);
				var lexer = new Express.ExpressLexer(input);
				var tokens = new CommonTokenStream(lexer);

				var parser = new Express.ExpressParser(tokens);
				parser.BuildParseTree = true;

				var tree = parser.schemaDeclaration();
				var walker = new ParseTreeWalker();
				walker.Walk(new Express.ExpressListener(), tree);

				/*
				var sb = new System.Text.StringBuilder();
				foreach(var t in tokens.GetTokens())
				{
					sb.AppendLine($"{t.ToString()}");
				}
				
				File.WriteAllText("tokens.txt",sb.ToString());
				*/
			}
			
		}
	}
}
