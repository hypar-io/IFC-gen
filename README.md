# IFC-gen  

IFC-gen is a set of tools for generating an IFC library for use in the language of your choice. The code generator uses [ANTLR](http://www.antlr.org) to parse the `Express.g4` grammar file and generate a parser. The parser is capable of reading the IFC object model as described in EXPRESS format in `IFC4.exp`. Each language target then implements an `ExpressListener`, whose methods are used to generate the code.

Source files for each language target can be found in the directory corresponding to the language's name. For example, the source code for the C# IFC library generator can be found in the `/csharp` folder. 

For per-language build instruction, please see the language folder's `README`.

## Goal
Accelerate the pace of development of IFC-based libraries and services by providing one EXPRESS-conformant grammar from which to generate ALL IFC libraries.

## Prerequisites

- [ANTLR](http://www.antlr.org). Follow the instructions on the ANTLR website to install ANTLR and create aliases to the ANTLR binaries.
- alias antlr4='java -jar /usr/local/lib/antlr-4.7-complete.jar'

## Building

The parser generator can run in any language as listed [here](https://github.com/antlr/antlr4/blob/master/doc/targets.md). Here's an example of how ANTLR would be run to generate C# code:  

`antlr4 -Dlanguage=CSharp -package Express -o ./csharp/antlr Express.g4`
