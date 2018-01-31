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
        private static bool outputTokens;

        static void Main(string[] args)
        {
            ParseOptions(args);
            if (showHelp)
            {
                return;
            }

            var generators = new List<Tuple<ILanguageGenerator, ITestGenerator, IFunctionsGenerator>>();

            if (language == "csharp")
            {
                generators.Add(new Tuple<ILanguageGenerator, ITestGenerator, IFunctionsGenerator>(
                    new CsharpLanguageGenerator(), new CsharpTestGenerator(), new CsharpFunctionsGenerator()));
            }
            else if (language == "proto")
            {
                generators.Add(new Tuple<ILanguageGenerator, ITestGenerator, IFunctionsGenerator>(new ProtobufGenerator(), new ProtobufTestGenerator(), null));
            } else if (language == "ts")
            {
                generators.Add(new Tuple<ILanguageGenerator, ITestGenerator, IFunctionsGenerator>(new TypescriptGenerator(), new TypescriptTestGenerator(), null));
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

                foreach (var generator in generators)
                {
                    var listener = new Express.ExpressListener(generator.Item1, generator.Item2);
                    walker.Walk(listener, tree);
                    Generate(listener, outDir, outDirTests, generator.Item1, generator.Item2, generator.Item3);
                }

                if (!outputTokens)
                {
                    return;
                }

                var tokenStr = new StringBuilder();
                foreach (var t in tokens.GetTokens())
                {
                    tokenStr.AppendLine(t.ToString());
                }
                Console.WriteLine(tokenStr);
            }
        }

        private static void Generate(Express.ExpressListener listener, string outDir, string outDirTests,
        ILanguageGenerator generator, ITestGenerator testGenerator, IFunctionsGenerator functionsGenerator)
        {
            var codePath = Path.Combine(outDir, generator.FileName);
            var testPath = Path.Combine(outDirTests, testGenerator.FileName);

            var codeSb = new StringBuilder();
            var testSb = new StringBuilder();

            codeSb.AppendLine(generator.Begin());
            //testSb.AppendLine(testGenerator.Begin());
            foreach (var kvp in listener.TypeData)
            {
                var td = kvp.Value;
                //codeSb.Append(td.ToString());

                // Only write tests for entities.
                /*var entity = td as Express.Entity;
				if(entity != null){
					testSb.AppendLine(entity.ToTestString());
				}*/
                File.WriteAllText(Path.Combine(outDir, td.Name + ".ts"), td.ToString());
            }
            //codeSb.AppendLine(generator.End());
            //testSb.AppendLine(testGenerator.End());

            //File.WriteAllText(codePath, codeSb.ToString());
            //File.WriteAllText(testPath,testSb.ToString());

            if (functionsGenerator != null)
            {
                var functionsPath = Path.Combine(outDir, functionsGenerator.FileName);
                File.WriteAllText(functionsPath, functionsGenerator.Generate(listener.FunctionData.Values));
            }
        }

        private static void ParseOptions(string[] args)
        {
            var p = new OptionSet() {
                { "e|express=", "The path the express schema.", v => expressPath = v },
                { "o|output=", "The directory in which the code is generated.", v => outDir = v},
                { "t|test=", "The directory in which the test code is generated.", v => outDirTests = v},
                { "l|language=", "The target language (csharp)", v => language = v},
                { "p|tokens", "Output tokens to stdout during parsing.", v => outputTokens = v != null},
                { "h|help",   v => showHelp = v != null },
            };

            List<string> extra;
            try
            {
                extra = p.Parse(args);
            }
            catch (OptionException e)
            {
                Console.Write("IFC-gen: ");
                Console.WriteLine(e.Message);
                Console.WriteLine("Try `IFC-gen --help' for more information.");
                return;
            }

            if (showHelp)
            {
                ShowHelp(p);
                return;
            }
        }

        private static void ShowHelp(OptionSet p)
        {
            Console.WriteLine("Usage: IFC-gen [OPTIONS]+");
            Console.WriteLine();
            Console.WriteLine("Options:");
            p.WriteOptionDescriptions(Console.Out);
        }
    }
}
