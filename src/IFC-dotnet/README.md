# IFC-dotnet

This is the [Industry Foundation Classes](http://www.buildingsmart-tech.org/specifications/ifc-overview/ifc-overview-summary) (IFC) library for dotnet.

# THIS PROJECT WILL BE MOVED TO A SEPARATE REPOSITORY SHORTLY.

# Design Considerations:

- All EXPRESS `TYPE` have a corresponding class derived from `IfcType`, which is a wrapper class whose `Value` property holds the actual value.
- All EXPRESS `ENUM` have a corresponding enum.
- All EXPRESS collection types: 'LIST', 'SET', and 'ARRAY', currently generate `List<T>` fields in C#. This solution does not conform to the EXPRESS specification for those types. So it will be updated in the future.
- EXPRESS `SELECT` types are created as classes derived from the `Select` base class. The `Select` base class has generic parameters corresponding to the types which can be selected in the `SELECT`. Additionally, the code generator creates one constructor for each selection type to aid in discovery of selectable types. Other languages which support discriminated unions may prefer to use that mechanism for modeling `SELECT`.
- All EXPRESS `ENTITY` have a corresponding class.
- All IFC attributes are generated as public class properties with a getter and setter. Chances are these will become more restrictive in the future. For those attributes not marked as `OPTIONAL`, the entity's corresponding class constructor will have parameters corresponding to the property, and a corresponding assignment will be generated in the constructor body. 
- Attributes marked as `DERIVED` are not currently turned into properties. Although the grammar generates a parser which can understand `DERIVE` and `WHERE` statements, these are not currently converted to code in property or method bodies.
- Types derived from `IfcRelationship` do not have corresponding parameters in the generated constructors. Many types have _many_ relationship properties. Adding all of these to the constructor made the constructors unwieldy. It's possible that these are required, but my present intuition is that a higher-level factory class for properly generating entities and establishing their relationships is a better way to do this. Whether these higher level libraries can also be auto-generated is a point on which I welcome all feedback.
- EXPRESS `WHERE` statements do not currently generate code. One possible pattern for this would be to generate static constructors for classes, placing the data validation logic in the static constructor and throwing an exception if the data validation fails. But, I feel like data validation needs to be done whenever the state of the object changes, so these data validation methods should either be reactive to property value changes, or they should live in a separate class containing testing methods for validating objects of certain types.
