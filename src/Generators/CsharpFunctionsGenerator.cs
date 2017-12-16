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

        public string Generate(IEnumerable<FunctionData> functionDatas)
        {
            return $@"
using System;

namespace IFC4
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
                var func = $@"
        public static void {f.Name}()
        {{
            throw new NotImplementedException();
        }}";
                functionsBuilder.AppendLine(func);
            }
            return functionsBuilder.ToString();
        } 
    }
}