[![Build Status](https://travis-ci.org/ikeough/IFC-gen.svg?branch=master)](https://travis-ci.org/ikeough/IFC-gen)

# IFC-gen is EXPERIMENTAL currently. I appreciate pull requests, but collaborators should expect that breaking changes may occur.

# IFC-gen  

IFC-gen is a library for generating an IFC library for use in the language of your choice. The code generator uses [ANTLR](http://www.antlr.org) to parse the `Express.g4` grammar file and generate a parser. The parser is capable of reading the IFC object model as described in EXPRESS format in `IFC4.exp`. In addition, IFC-gen uses the STEP grammar described in `STEP.g4` to generate a STEP parser whose generated files are output in the target language directory. The code generator is a dotnet core project containing an interface, `ILanguageGenerator`, which is implemented by classes which generate code.

Source files for each target language can be found in the directory corresponding to the language's name. For example, the source code for the C# IFC library generator can be found in the `/lang/csharp` folder. 

For per-language build instruction, please see the language folder's `README`.

## Motivation

Let's say you work in an architecture or engineering firm writing code. Or a software startup that's trying to solve problems in AEC. Where do you go to find a library that reads and writes data in an industry-standard form? Maybe you've looked at the IFC schema and, like many before you, have decided that it's "too complex" or "too heavy" for your needs. Maybe you've even gone and built your own data model to describe building elements. 

As more firms build their own data models to solve the same problem, we get further away from the vision of what IFC was _supposed_ to be. By comparison, it would be as if every software company that makes a browser decided that they were going to create their own markup and styling languages such that the website you've designed to work in one, wouldn't work in any of the others. That's crazy. It seems to me that not speaking the same language is an impediment to technological progress in AEC. 

IFC-gen was created to make generating IFC-compliant software libraries easy, and to ease the updating and testing of those libraries with new releases of the IFC specification. To achieve this goal, IFC-gen has code generation at its core.  What do you want to build? A Python library? An [Open API](https://github.com/OAI/OpenAPI-Specification) specification? A [GraphQL](http://graphql.org) schema? Creating a generator for any of these is as easy as providing a new implementation of `ILanguageGenerator`.

Because IFC is an incredibly broad data model, I have also set the goal of proposing a high-level API for building geometry which will use the generated libraries under the hood, but will provide an interface that is grokable by the lay user. This will most-likely become the focus of work when the underlying code generation mechanisms and STEP reading and writing facilities are stabilized.

If IFC-gen isn't exactly what you're looking for, there are a few other great IFC projects that you might want to check out:
- http://bimserver.org
- http://ifcopenshell.org
- https://github.com/jmirtsch/GeometryGymIFC
- https://github.com/xBimTeam

# Road Map
- [x] ANTLR grammar for IFC EXPRESS.  
- [x] `ExpressListener` to generate intermediate type data.  
- [x] CI/CD integration with Travis.
- [ ] Generation in all supported languages of ALL types described by the schema.  
- [ ] Common BDD test suite with test implementations in all supported languages.
- [ ] Package generation for all supported languages (i.e. Nuget package for IFC-dotnet).
- [ ] Minimum one local file storage back end and one db back end.
- [ ] Support for reading and writing STEP files per [ISO 10303-21](https://en.wikipedia.org/wiki/ISO_10303-21).  

## Prerequisites

- [ANTLR](http://www.antlr.org). ANTLR is used to generate parsers from a grammar. Follow the instructions on the ANTLR website to install ANTLR and create aliases to the ANTLR binaries.
- [.NET](https://www.microsoft.com/net/learn/get-started/macos). Currently, IFC-gen creates a C# executable, `IFC-gen.dll`, for generating IFC from the EXPRESS schema. 

## Building

### For 'nix
`make`

### For Windows
`make.bat`

## Creating a Language Generator
Language generators implement the `ILanguageGenerator` interface. You can find implementations of `ILanguageGenerator` in `/Generators`. To create your own language generator do the following:
- Place an implementation of `ILanguageGenerator` in `/Generators`.
- Extend the command line options parsing in `Program.cs` to support your target language.
