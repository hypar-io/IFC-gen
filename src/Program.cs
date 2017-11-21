using System;
using System.Collections.Generic;
using System.Reflection;
using System.IO;
using System.Linq;
using System.Text;
using Antlr4.Runtime;
using Antlr4.Runtime.Tree;

namespace IFC.Generate
{
	class Program
	{
		static void Main(string[] args)
		{
			if(args.Length != 2)
			{
				Console.WriteLine("The syntax for the command is:");
				Console.WriteLine("IFC-gen <express schema path> <output directory>");
				return;
			}

			var expressPath = args[0];
			if(!File.Exists(expressPath))
			{
				Console.WriteLine($"The specified express file path, {expressPath}, does not exist.");
				return;
			}

			var outputDir = args[1];
			if(!Directory.Exists(outputDir))
			{
				Console.WriteLine($"The specified output directory, {outputDir}, does not exist.");
				return;
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
				var listener = new Express.ExpressListener(sb);
				walker.Walk(listener, tree);

				var outPath = Path.Combine(outputDir, "IFC.g.cs");
				File.WriteAllText(outPath,sb.ToString());

				// Write tokens to a file for debugging.
				/*var tokenStr = new StringBuilder();
				foreach(var t in tokens.GetTokens())
				{
					tokenStr.AppendLine(t.ToString());
				}
				File.WriteAllText("tokens.txt",tokenStr.ToString());*/

			}
		}
	}
}
