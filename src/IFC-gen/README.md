# IFC-gen  

IFC-gen is a set of tools for generating an IFC library for use in the language of your choice. The code generator uses [ANTLR](http://www.antlr.org) to parse the `Express.g4` grammar file and generate a parser. The parser is capable of reading the IFC object model as described in EXPRESS format in `IFC4.exp`. Each language target then implements an `ExpressListener`, whose methods are used to generate the code.

Source files for each language target can be found in the directory corresponding to the language's name. For example, the source code for the C# IFC library generator can be found in the `/csharp` folder. 

For per-language build instruction, please see the language folder's `README`.

## Prerequisites

- [ANTLR](http://www.antlr.org). Follow the instructions on the ANTLR website to install ANTLR and create aliases to the ANTLR binaries. 