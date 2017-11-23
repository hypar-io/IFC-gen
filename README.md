# IFC-gen  

IFC-gen is a set of tools for generating an IFC library for use in the language of your choice. The code generator uses [ANTLR](http://www.antlr.org) to parse the `Express.g4` grammar file and generate a parser. The parser is capable of reading the IFC object model as described in EXPRESS format in `IFC4.exp`. Each language target then implements an `ExpressListener`, whose methods are used to generate the code for the desired language. In addition, IFC-gen uses the STEP grammar described in `STEP.g4` to generate a STEP parser whose generated files are output in the target language directory.

Source files for each target language can be found in the directory corresponding to the language's name. For example, the source code for the C# IFC library generator can be found in the `/lang/csharp` folder. 

For per-language build instruction, please see the language folder's `README`.

## Goal
Accelerate the pace of development of IFC-based libraries and services by providing one EXPRESS-conformant grammar from which to generate ALL IFC libraries.

## Prerequisites

- [ANTLR](http://www.antlr.org). ANTLR is used to generate parsers from a grammar. Follow the instructions on the ANTLR website to install ANTLR and create aliases to the ANTLR binaries.
- [.NET](https://www.microsoft.com/net/learn/get-started/macos). Currently, IFC-gen creates a C# executable, `IFC-gen.dll`, for generating IFC from the EXPRESS schema. 

## Building

`make`

## Creating a Language Generator
Language generators implement the `ILanguageGenerator` interface. You can find implementations of `ILanguageGenerator` in `/Generators`. To create your own language generator do the following:
- Place an implementation of `ILanguageGenerator` in `/Generators`.
- Extend the command line options parsing in `Program.cs` to support your target language. 
