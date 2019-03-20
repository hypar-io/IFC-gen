# IFC-csharp
An [Industry Foundation Classes](http://www.buildingsmart-tech.org/specifications/ifc-overview/ifc-overview-summary) (IFC) library for .NET.

# Pre-requisites
- [.NET Core](https://www.microsoft.com/net/core)

# Nuget
```
dotnet add package Hypar.IFC2X3`
```

# To Build
```
cd src
dotnet build
```

# To Test
```
cd test
dotnet test
```

# Design Considerations

### Document and IStorageProvider
The container for all IFC instances is the `Document`. A Document holds a reference to an implementation of `IStorageProvider`. The built in storage provider is `LocalStorageProvider`, which provides an in-memory store, but other implementations of `IStorageProvider` could be created which allow storage to disk or to a database.

### Generated Code
Most of the code in this repository is generated automatically using [IFC-gen](https://github.com/hypar-io/IFC-gen/blob/master/README.md). The templates for code generation and certain base classes have been designed to generate an idiomatic C# library.

- All EXPRESS `TYPE` have a corresponding class derived from `IfcType`, which is a wrapper class whose `Value` property holds the actual value.
- All EXPRESS `ENUM` have a corresponding enum.
- All EXPRESS collection types: 'LIST', 'SET', and 'ARRAY', currently generate `List<T>` fields in C#. This solution does not conform to the EXPRESS specification for those types. So it will be updated in the future.
- EXPRESS `SELECT` types are created as classes derived from the `Select` base class. The `Select` base class is a poor man's union type, containing a field called `Choice` of type `object`. Generated `SELECT` types, have as many constructors as there are types in the select, each of which simply sets the Choice object to the provided object. This is all to get around C#'s lack of a discriminated union type. 
- All EXPRESS `ENTITY` have a corresponding class.
- All IFC attributes are generated as public class properties with a getter and setter. Chances are these will become more restrictive in the future. For those attributes not marked as `OPTIONAL`, the entity's corresponding class constructor will have parameters corresponding to the property, and a corresponding assignment will be generated in the constructor body. 
- Attributes marked as `DERIVED` are not currently turned into properties. Although the grammar generates a parser which can understand `DERIVE` and `WHERE` statements, these are not currently converted to code in property or method bodies.
- Types derived from `IfcRelationship` do not have corresponding parameters in the generated constructors. Many types have _many_ relationship properties. Adding all of these to the constructor made the constructors unwieldy. It's possible that these are required, but my present intuition is that a higher-level factory class for properly generating entities and establishing their relationships is a better way to do this. Whether these higher level libraries can also be auto-generated is a point on which I welcome all feedback.
- EXPRESS `WHERE` statements do not currently generate code. One possible pattern for this would be to generate static constructors for classes, placing the data validation logic in the static constructor and throwing an exception if the data validation fails. But, I feel like data validation needs to be done whenever the state of the object changes, so these data validation methods should either be reactive to property value changes, or they should live in a separate class containing testing methods for validating objects of certain types.
- EXPRESS `FUNCTION` statements are not supported. Generating code for these functions would require math parsing functionality and per-language generation code for mathematical expressions.
