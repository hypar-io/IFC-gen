using Express;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace IFC4.Generators
{
    public class ProtobufGenerator : ILanguageGenerator
    {

        internal List<string> listMessages = new List<string>();

        public Dictionary<string,SelectType> SelectData {get;set;}

        public Dictionary<string,EnumType> EnumData{get;set;}

        public string Begin()
        {
            return @"
syntax = ""proto3"";
option csharp_namespace = ""IFC4.Grpc"";
";
        }

        public string End()
        {

            var listMessagesBuilder = new StringBuilder();

            // Write additonal messages that wrap lists.
            foreach (var lm in listMessages)
            {
                listMessagesBuilder.AppendLine($@"
message {lm}{{
    repeated {lm.Substring(0, lm.Length - 5)} Value = 1;
}}");
            }
            return listMessagesBuilder.ToString();
        }

        public string AttributeDataString(AttributeData data)
        {
            if (data.IsCollection)
            {
                // Protocol buffers don't support nested arrays.
                // We create message types representing the various levels
                // of nesting. An array MyType[][][] becomes three message types:
                // MyTypeList2 - repeated MyType; (Named FooList2 to avoid name clash wit other IFC list types.)
                // MyTypeList3 - repeated MyType2;
                // MyTypeList4 - repeated MyType3;
                if (data.Rank > 1)
                {
                    for (var i = 2; i <= data.Rank; i++)
                    {
                        var listTypeName = $"{data.Type}List{data.Rank}";
                        if (!listMessages.Contains(listTypeName))
                            listMessages.Add(listTypeName);
                        var typeNameRank = i == 2 ? string.Empty : (i).ToString();
                        return $"repeated {listTypeName}{typeNameRank} {data.Name}";
                    }
                }
                return $"repeated {data.Type} {data.Name}";
            }
            return $"{data.Type} {data.Name}";
        }

        public string AttributeDataType(bool isCollection, int rank, string type, bool isGeneric)
        {
            return $"{type}";
        }

        public string AttributeStepString(AttributeData data, bool isDerivedInChild)
        {
            throw new NotImplementedException();
        }

        public string SimpleTypeString(WrapperType data)
        {
            return $@"
message {data.Name}{{
    {data.WrappedType} Value = 1;
}}";
        }

        public string EnumTypeString(EnumType data)
        {
            var fieldBuilder = new StringBuilder();
            for (var i = 0; i < data.Values.Count(); i++)
            {
                var v = data.Values.ElementAt(i);
                if (i == data.Values.Count() - 1)
                {
                    fieldBuilder.Append($"\t\t{v}={i};");
                }
                else
                {
                    fieldBuilder.AppendLine($"\t\t{v}={i};");
                }
            }

            return $@"
message {data.Name}{{
    enum Value{{
{fieldBuilder.ToString()}
    }}
}}";
        }

        public string SelectTypeString(SelectType data)
        {
            var fieldBuilder = new StringBuilder();
            for (var i = 0; i < data.Values.Count(); i++)
            {
                var v = data.Values.ElementAt(i);
                if (i == data.Values.Count() - 1)
                {
                    fieldBuilder.Append($"\t\t{v} {v.ToLower()}={i + 1};");
                }
                else
                {
                    fieldBuilder.AppendLine($"\t\t{v} {v.ToLower()}={i + 1};");
                }
            }
            return $@"
message {data.Name}{{
    oneof Select {{
{fieldBuilder.ToString()}
    }}
}}";
        }

        public string EntityString(Entity data)
        {
            var fieldBuilder = new StringBuilder();

            // Protocol buffers don't support inheritance. We use composition instead.
            var parents = data.Parents().ToArray();
            var attrs = data.Attributes.Where(a => !a.IsDerived);
            var attrCount = attrs.Count();
            for (var i = 0; i < attrCount; i++)
            {
                var a = attrs.ElementAt(i);
                var repeated = a.IsCollection ? "repeated " : string.Empty;
                var opt = a.IsOptional ? "// optional" : string.Empty;
                if (i == attrCount - 1 && !parents.Any())
                {
                    fieldBuilder.Append($"\t{a.ToString()}={i + 1}; {opt}");
                }
                else
                {
                    fieldBuilder.AppendLine($"\t{a.ToString()}={i + 1}; {opt}");
                }
            }

            if (parents.Any())
            {
                fieldBuilder.Append($"\t{parents.First().Name} Parent = {attrCount + 1};");
            }
            return $@"
message {data.Name}{{
{fieldBuilder.ToString()}
}}";
        }

        public string FileExtension
        {
            get { return "proto"; }
        }

        public string ParseSimpleType(ExpressParser.SimpleTypeContext context)
        {
            var type = string.Empty;
            if (context.binaryType() != null)
            {
                type = "bytes";
            }
            else if (context.booleanType() != null)
            {
                type = "bool";
            }
            else if (context.integerType() != null)
            {
                type = "int64";
            }
            else if (context.logicalType() != null)
            {
                type = "bool";
            }
            else if (context.numberType() != null)
            {
                type = "double";
            }
            else if (context.realType() != null)
            {
                type = "double";
            }
            else if (context.stringType() != null)
            {
                type = "string";
            }
            return type;
        }
        
        public void GenerateManifest(string directory, IEnumerable<string> names){}
    }
}