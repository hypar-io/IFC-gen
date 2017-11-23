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
		private static string expressPath;
		private static bool showHelp;

		static void Main(string[] args)
		{
			ParseOptions(args);
			if(showHelp){
				return;
			}

			List<ILanguageGenerator> generators = new List<ILanguageGenerator>();

			if(language == "csharp"){
				generators.Add(new CsharpLanguageGenerator());
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
				var sb = new StringBuilder();

				foreach(var generator in generators){
					var listener = new Express.ExpressListener(generator, sb);
					walker.Walk(listener, tree);
					var outPath = Path.Combine(outDir, generator.FileName);
					File.WriteAllText(outPath,sb.ToString());
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

		private static void ParseOptions(string[] args){
			var p = new OptionSet () {
				{ "e|express=", "The path the express schema.", v => expressPath = v },
				{ "o|output=", "The directory in which the output file is written.", v => outDir = v},
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
