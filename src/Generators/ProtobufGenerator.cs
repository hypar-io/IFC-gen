using Express;
using System;
using System.Linq;
using System.Text;

namespace IFC4.Generators{
    public class ProtobufGenerator : ILanguageGenerator{
        public string Begin(){
            return @"
syntax = ""proto3"";
option csharp_namespace = ""IFC4.Grpc"";
";
        }

        public string End(){
            return string.Empty;
        }

        public string AttributeDataString(AttributeData data){
            if(data.Rank == 0){
                return "*****";
            }
            return $"{data.Type} {data.Name} = 0";
        }

        public string AttributeDataType(AttributeData data){
            return data.type;
        }

        
        public string SimpleTypeString(SimpleType data){
            return $@"
message {data.Name}{{
    {data.wrappedType} Value = 1;
}}";
        }

        public string EnumTypeString(EnumType data){
            var fieldBuilder = new StringBuilder();
            for(var i=0; i<data.Values.Count(); i++){
                var v = data.Values.ElementAt(i);
                if(i == data.Values.Count() -1){
                    fieldBuilder.Append($"\t\t{v}={i};");
                }else{
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

        public string SelectTypeString(SelectType data){
            var fieldBuilder = new StringBuilder();
            for(var i=0; i<data.Values.Count(); i++){
                var v = data.Values.ElementAt(i);
                if(i == data.Values.Count() -1){
                    fieldBuilder.Append($"\t\t{v} {v.ToLower()}={i+1};");
                }else{
                    fieldBuilder.AppendLine($"\t\t{v} {v.ToLower()}={i+1};");
                }
            }
            return $@"
message {data.Name}{{
    oneof Select {{
{fieldBuilder.ToString()}
    }}
}}";
        }

        public string EntityString(Entity data){
            var fieldBuilder = new StringBuilder();
            var attrs = data.ParentsAndSelf().SelectMany(p=>p.Attributes).Where(a=>!a.IsDerived);
            for(var i=0; i<attrs.Count(); i++){
                var a = attrs.ElementAt(i);
                var repeated = a.IsCollection?"repeated ":string.Empty;
                if(i == attrs.Count() - 1){
                    fieldBuilder.Append($"\t{repeated}{a.Type} {a.Name}={i+1};");
                }else{
                    fieldBuilder.AppendLine($"\t{repeated}{a.Type} {a.Name}={i+1};");
                }
            }
            return $@"
message {data.Name}{{
{fieldBuilder.ToString()}
}}";
        }

        public string FileName{
            get{return "IFC.g.proto";}
        }

        public string ParseType(ExpressParser.SimpleTypeContext context){
            var type = string.Empty;
				if(context.binaryType() != null)
				{
					type = "bytes";
				}
				else if(context.booleanType() != null)
				{
					type = "bool";
				}
				else if(context.integerType() != null)
				{
					type = "int64";
				}
				else if(context.logicalType() != null)
				{
					type = "bool";
				}
				else if(context.numberType() != null)
				{
					type = "double";
				}
				else if(context.realType() != null)
				{
					type = "double";
				}
				else if(context.stringType() != null)
				{
					type = "string";
				}
			return type;
        }

    }
}