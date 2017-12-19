using Express;
using System.Collections.Generic;

namespace IFC4.Generators
{
    public interface IGenerator
    {
        /// <summary>
        /// Begin is called at the beginning of code generation.
        /// </summary>
        /// <returns></returns>
        string Begin();

        /// <summary>
        /// End is called at the end of code generation.
        /// </summary>
        /// <returns></returns>
        string End();
    }

    /// <summary>
    /// ILanguageGenerator provides the interface for classes which
    /// are used to generate source code from AttributeData or TypeData.
    /// </summary>
    public interface ILanguageGenerator : IGenerator
    {
        /// <summary>
        /// AttributeDataType is called when generating a string representing
        /// the language target's equivalent of a type for an attribute.
        /// </summary>
        /// <returns></returns>
        string AttributeDataType(bool isCollection, int rank, string type, bool isGeneric);

        /// <summary>
        /// AttributeDataString is called when generating a string representing
        /// the language target's equivalent of a property. 
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        string AttributeDataString(AttributeData data);

        /// <summary>
        /// AttributeStepString is called when an AttributeData's 
        /// ToStep method is written.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        string AttributeStepString(AttributeData data);

        /// <summary>
        /// SimpleTypeString is called when an IFCType<T> is generated.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        string SimpleTypeString(WrapperType data);

        /// <summary>
        /// EnumTypeString is called when an enum type is generated.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        string EnumTypeString(EnumType data);

        /// <summary>
        /// SelectTypeString is called when a Select<T> type is generated.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        string SelectTypeString(SelectType data);

        /// <summary>
        /// EntityString is called when an Entity is generated.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        string EntityString(Entity data);

        /// <summary>
        /// The name to be used for the file containing the 
        /// generated code.
        /// </summary>
        /// <returns></returns>
        string FileName { get; }

        /// <summary>
        /// ParseType is called when the the type wrapped by a SimpleType 
        /// is parsed to its language-specific type.
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        string ParseSimpleType(ExpressParser.SimpleTypeContext context);
    }

    public interface IFunctionsGenerator
    {
        /// <summary>
        /// The name to be used for the file containing the generated functions.
        /// </summary>
        /// <returns></returns>
        string FileName { get; }

        string Generate(IEnumerable<FunctionData> functionDatas);
    }

    public interface ITestGenerator : IGenerator
    {
        string EntityTest(Entity data);
        string FileName { get; }
    }
}