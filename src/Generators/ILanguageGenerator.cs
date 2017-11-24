using Express;

namespace IFC4.Generators
{
    public interface ILanguageGenerator{
		string AttributeDataAssignment(AttributeData data);
		string AttributeDataType(AttributeData data);
		string AttributeDataAllocation(AttributeData data);
		string AttributeDataString(AttributeData data);
		string AttributeStepString(AttributeData data);
		string SimpleTypeWrappedType(SimpleType data);
        string SimpleTypeAsCollection(SimpleType data);
        string SimpleTypeString(SimpleType data);
        string EnumTypeString(EnumType data);
		string SelectTypeString(SelectType data);
        string EntityConstructorParams(Entity data, bool includeOptional);
        string EntityBaseConstructorParams(Entity data, bool includeOptional);
		string EntityString(Entity data);
		string FileName{get;}
	}
}