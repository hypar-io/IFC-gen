# IFC-dotnet

This is the [Industry Foundation Classes](http://www.buildingsmart-tech.org/specifications/ifc-overview/ifc-overview-summary) (IFC)  library for dotnet.

### Project Structure
- `src/IFC`- The IFC object model library generated from the IFC specification .xsd.
- `src/IFC-dotnet`- The simplified IFC object model library.
- `util/IFC-gen` - IFC class generator application.
- `test/`- An XUnit test project for testing the object model defined in `IFC-dotnet`.

### Notes About Naming Conventions

- To increase the legibility of the API, the `Ifc` prefix has been removed from all class names _except_ where those class names conflict with class names or reserved words in C#.
- Classes generated from the specification include many properties with the form `SomePropertySpecified`. These properties are simply checks whether `SomeProperty` has a value. These checks should be handled internally.
- Where properties have the same name as their enclosing type (ex. `AppliedValue.AppliedValue`), the `Property` suffix is added (ex. `AppliedValue.AppliedValueProperty`).

### To Build
From the root directory:
```
dotnet build
```

### To Test
From the root directory:
```
dotnet test
```

### Generating the IFC Class Definitions
The class definitions were generated using `xsd.exe` on Windows as follows:
```
xsd <path to xsd> /n:IFC4 /c /out:<path to outputdir>
```

### To Generate Class Files
```
dotnet run <root>\src\IFC\bin\Debug\netstandard2.0\IFC.dll <root>\src\generated
```

### To Do

- Generate code comments from IFC docs.
- Investigate use of [ANTLR Express Grammar](https://github.com/opensourceBIM/BuildingSMARTLibrary/blob/master/BuildingSMARTLibrary/src/net/sourceforge/osexpress/parser/express.g) for parsing EXPRESS.
- Convert all properties ending in Specified to null checks.

### Generate and Test Grammar
A script is available to generate the parser and lexer using the EXPRESS grammar. From `./src/IFC-gen` run:  
```. ./generate_and_test.sh```
