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

### To Generate Class Files
```
dotnet run "C:\Users\Ian\Documents\GitHub\IFC-dotnet\src\bin\Debug\netstandard2.0\IFC-dotnet.dll" "C:\Users\Ian\Documents\GitHub\IFC-dotnet\src"
```

### To Do

- Generate code comments from IFC docs.
- Investigate use of [ANTLR Express Grammar](https://github.com/opensourceBIM/BuildingSMARTLibrary/blob/master/BuildingSMARTLibrary/src/net/sourceforge/osexpress/parser/express.g) for parsing EXPRESS.
- Drop 'Ifc' from the front of all classes.
- Convert all properties ending in Specified to null checks.
