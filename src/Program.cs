using System;
using System.Collections.Generic;
using System.Reflection;
using System.IO;
using System.Linq;
using System.Text;
using Antlr4.Runtime;
using Antlr4.Runtime.Tree;
using IFC4.Generators;
using NDesk.Options;

namespace IFC.Generate
{
	class Program
	{
		private static string language;
		private static string outDir;
		private static string outDirTests;
		private static string expressPath;
		private static bool showHelp;

		static void Main(string[] args)
		{
			ParseOptions(args);
			if(showHelp){
				return;
			}

			var generators = new List<Tuple<ILanguageGenerator, ITestGenerator>>();

			if(language == "csharp"){
				generators.Add(new Tuple<ILanguageGenerator, ITestGenerator>(new CsharpLanguageGenerator(), new CsharpTestGenerator()));
			}else if(language == "proto"){
				generators.Add(new Tuple<ILanguageGenerator, ITestGenerator>(new ProtobufGenerator(), new ProtobufTestGenerator()));
			}

			using (FileStream fs = new FileStream(expressPath, FileMode.Open))
			{
				var input = new AntlrInputStream(fs);
				var lexer = new Express.ExpressLexer(input);
				var tokens = new CommonTokenStream(lexer);

				var parser = new Express.ExpressParser(tokens);
				parser.BuildParseTree = true;

				var tree = parser.schemaDecl();
				var walker = new ParseTreeWalker();
				
				var testSb = new StringBuilder();

				foreach(var generator in generators){
					var listener = new Express.ExpressListener(generator.Item1, generator.Item2);
					walker.Walk(listener, tree);
					Generate(listener, outDir, outDirTests, generator.Item1, generator.Item2);
				}
				
				// Write tokens to a file for debugging.
				/*var tokenStr = new StringBuilder();
				foreach(var t in tokens.GetTokens())
				{
					tokenStr.AppendLine(t.ToString());
				}
				File.WriteAllText("tokens.txt",tokenStr.ToString());*/
			}
		}

		private static void Generate(Express.ExpressListener listener, string outDir, string outDirTests, ILanguageGenerator generator, ITestGenerator testGenerator){
			var codePath = Path.Combine(outDir, generator.FileName);
			var testPath = Path.Combine(outDirTests, testGenerator.FileName);

			var codeSb = new StringBuilder();
			var testSb = new StringBuilder();

			codeSb.AppendLine(generator.Begin());
			testSb.AppendLine(testGenerator.Begin());
			foreach(var kvp in listener.TypeGraph)
			{
				var td = kvp.Value;
				codeSb.AppendLine(td.ToString());

				// Only write tests for entities.
				var entity = td as Express.Entity;
				if(entity != null){
					testSb.AppendLine(entity.ToTestString());
				}
			}
			codeSb.AppendLine(generator.End());
			testSb.AppendLine(testGenerator.End());

			File.WriteAllText(codePath,codeSb.ToString());
			File.WriteAllText(testPath,testSb.ToString());
		}

		private static void ParseOptions(string[] args){
			var p = new OptionSet () {
				{ "e|express=", "The path the express schema.", v => expressPath = v },
				{ "o|output=", "The directory in which the code is generated.", v => outDir = v},
				{ "t|test=", "The directory in which the test code is generated.", v => outDirTests = v},
				{ "l|language=", "The target language (csharp)", v => language = v},
				{ "h|help",   v => showHelp = v != null },
			};
			
			List<string> extra;
			try {
				extra = p.Parse (args);
			}
			catch (OptionException e) {
				Console.Write ("IFC-gen: ");
				Console.WriteLine (e.Message);
				Console.WriteLine ("Try `IFC-gen --help' for more information.");
				return;
			}

			if(showHelp){
				ShowHelp(p);
				return;
			}
		}

		private static void ShowHelp (OptionSet p)
		{
			Console.WriteLine ("Usage: IFC-gen [OPTIONS]+");
			Console.WriteLine ();
			Console.WriteLine ("Options:");
			p.WriteOptionDescriptions (Console.Out);
		}
	}
}
