using Express;

namespace IFC4.Generators
{
    public interface ILanguageGenerator{
		string Begin();
		string End();
		string AttributeDataType(AttributeData data);
		string AttributeDataString(AttributeData data);
		string AttributeStepString(AttributeData data);
        string SimpleTypeString(SimpleType data);
        string EnumTypeString(EnumType data);
		string SelectTypeString(SelectType data);
		string EntityString(Entity data);
		string FileName{get;}
		string ParseType(ExpressParser.SimpleTypeContext context);
	}

	public interface ITestGenerator{
		string Begin();
		string End();
		string EntityTest(Entity data);
		string FileName{get;}
	}
}