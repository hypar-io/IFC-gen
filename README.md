# IFC-dotnet

This is the [Industry Foundation Classes](http://www.buildingsmart-tech.org/specifications/ifc-overview/ifc-overview-summary) (IFC)  library for dotnet.

### To Build
```
dotnet build
```

### To Test
```
dotnet test
```

### Generating the IFC Class Definitions
The class definitions were generated using `xsd.exe` on Windows as follows:
```
xsd <path to xsd> /n:IFC4 /c /out:<path to outputdir>
```

### To Do

- Write utility to automatically generate partial class files from class definitions in IFC4_ADD2.cs.
  - Utility should add documentation from IFC docs.
- Investigate use of [ANTLR Express Grammar](https://github.com/opensourceBIM/BuildingSMARTLibrary/blob/master/BuildingSMARTLibrary/src/net/sourceforge/osexpress/parser/express.g) for opening IFC files.
