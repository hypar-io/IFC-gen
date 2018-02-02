using Express;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace IFC4.Generators
{
    public class CsharpFunctionsGenerator : IFunctionsGenerator
    {
        public string FileName
        {
            get{return "Functions.g.cs";}
        }

        private Dictionary<string, SelectType> selectData = new Dictionary<string, SelectType>();
        public Dictionary<string, SelectType> SelectData
        {
            get{return selectData;}
            set{selectData = value;}
        }

        public string Generate(IEnumerable<FunctionData> functionDatas)
        {
            return $@"
using System;
using System.Collections.Generic;

namespace IFC
{{
    public static class Functions
    {{
        {Functions(functionDatas)}
    }}
}}";
        }

        private static string Functions(IEnumerable<FunctionData> functionDatas)
        {
            var functionsBuilder = new StringBuilder();
            foreach(var f in functionDatas)
            {
                var parameters = string.Join(",", f.Parameters.Select(p=>$"{p.Type} {p.ParameterName}"));
                var func = $@"
        public static {f.ReturnType.Type} {f.Name}{(f.ReturnType.IsGeneric?"<T>":"")}({parameters})
        {{
            throw new NotImplementedException();
        }}";
                functionsBuilder.AppendLine(func);
            }
            return functionsBuilder.ToString().TrimEnd('\n');
        } 
    }
}