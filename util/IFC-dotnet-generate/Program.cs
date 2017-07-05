using System;
using System.Reflection;
using System.IO;
using System.Linq;

namespace IFC_dotnet_generate
{
    class ParameterInfo
    {
        public Type Type{get;set;}
        public string Name{get;set;}
        public bool Inherited{get;set;}
    }

    class Program
    {
        static void Main(string[] args)
        {
            if(args.Length != 2)
            {
                Console.WriteLine("Usage: IFC-dotnet-generate.exe <path to IFC dll> <output directory>");
                return;
            }

            if(!File.Exists(args[0]))
            {
                Console.WriteLine("The specified file does not exist.");
                return;
            }

            if(!Directory.Exists(args[1]))
            {
                Console.WriteLine("The specified output directory does not exist.");
            }

            var asm = Assembly.LoadFrom(args[0]);
            var classes = asm.GetTypes().Where(t=>t.IsPublic && t.IsClass);
            foreach (var c in classes)
            {
                var paramStr = "";
                var paramSetStr = "";

                foreach(var p in c.GetProperties()){
                    var pi = new ParameterInfo();
                    pi.Type = p.PropertyType;
                    pi.Name = p.Name.First().ToString().ToLower() + String.Join("", p.Name.Skip(1));
                }
                // Create a constructor which takes this type's properties as inputs.
                foreach(var p in c.GetProperties().Where(pr=>pr.DeclaringType == c))
                {
                    var pName = p.Name.First().ToString().ToLower() + String.Join("", p.Name.Skip(1));
                    var fieldName = $"{pName}Field";

                    if(pName == "ref")
                    {
                        pName = "reference";
                    }

                    if(pName == "operator"){
                        pName = "op";
                    }

                    // Create parameter names using the property name converted to camel case
                    paramStr += $"{p.PropertyType.Name} {pName}, ";

                    if(p.Name == "ref"){
                        paramSetStr += $"\t\t\tthis.@{p.Name} = {pName};\n";
                    }else{
                        paramSetStr += $"\t\t\tthis.{p.Name} = {pName};\n";
                    }
                }

                var baseParamStr = "";

                foreach(var bp in c.BaseType.GetProperties().Where(pr=>pr.DeclaringType == c.BaseType))
                {
                    var pName = bp.Name.First().ToString().ToLower() + String.Join("", bp.Name.Skip(1));
                    
                    if(pName == "ref")
                    {
                        pName = "reference";
                    }

                    if(pName == "operator"){
                        pName = "op";
                    }

                    paramStr += $"{bp.PropertyType.Name} {pName}, ";
                    baseParamStr += $"{pName}, ";
                }

                paramStr = paramStr.TrimEnd(new char[]{' ',','});
                baseParamStr = baseParamStr.TrimEnd(new char[]{' ',','});

                var classStr = "using System;\n\n" + 
                "namespace IFC4\n" +
                "{\n" +
                "\tpublic partial class " + c.Name + "\n" +
                "\t{\n" + 
                "\t\tpublic " + c.Name + "(" + paramStr + ")" + (!string.IsNullOrEmpty(baseParamStr)?":base("+baseParamStr+")":"") + "\n" +
                "\t\t{\n" + 
                paramSetStr +
                "\t\t}\n" +
                "\t}\n" +
                "}";
                var csPath = Path.Combine(args[1], $"{c.Name}.cs");
                File.WriteAllText(csPath, classStr);
            }
        }
    }
}
