using Express;
using System.Collections.Generic;

namespace IFC4.Generators
{
    /// <summary>
    /// ILanguageGenerator provides the interface for classes which
    /// are used to generate source code from various data classes corresponding
    /// to types used in the IFC schema.
    /// </summary>
    public interface ILanguageGenerator
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
        /// <param name="isDerivedInChild"></param>
        /// <returns></returns>
        string AttributeStepString(AttributeData data, bool isDerivedInChild);

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
        /// The file extension to be used for the file containing the 
        /// generated code.
        /// </summary>
        /// <returns></returns>
        string FileExtension { get; }

        /// <summary>
        /// ParseType is called when the the type wrapped by a SimpleType 
        /// is parsed to its language-specific type.
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        string ParseSimpleType(ExpressParser.SimpleTypeContext context);

        /// <summary>
        /// GenerateManifest is called after the generation of code files.
        /// If the language which is being generated requires a manifest file of some sort,
        /// it can be generated here. For example, an index.g.ts file is generated for Typescript
        /// to facilitate a single import.
        /// </summary>
        /// <param name="directory"></param>
        /// <param name="types"></param>
        void GenerateManifest(string directory, IEnumerable<string> types);

        /// <summary>
        /// A map of SelectType by name.
        /// This must be set before operations which require checking dependencies and attribute types.
        /// </summary>
        Dictionary<string,SelectType> SelectData{get;set;}

        /// <summary>
        /// A map of EnumType by name.
        /// </summary>
        Dictionary<string,EnumType> EnumData{get;set;}
    }

    public interface IFunctionsGenerator
    {
        /// <summary>
        /// The name to be used for the file containing the generated functions.
        /// </summary>
        /// <returns></returns>
        string FileName { get; }

        string Generate(IEnumerable<FunctionData> functionDatas);

        Dictionary<string,SelectType> SelectData {get;set;}
    }
}