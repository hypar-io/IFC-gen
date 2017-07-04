using System;
using System.Reflection;
using System.IO;
using System.Linq;

namespace IFC_dotnet_generate
{
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
                Console.WriteLine(c.Name);
                foreach(var p in c.GetProperties().Where(pr=>pr.DeclaringType == c))
                {
                    Console.WriteLine("\t" + p.Name); 
                }

                var classStr = $"namespace IFC4\n" +
                    "{\n" +
                    "\tpublic partial class {p.Name}\n" +
                    "\t{\n" + 
                    "\t}\n" +
                    "}";
                var csPath = Path.Combine(args[1], $"{c.Name}.cs");
                File.WriteAllText(csPath, classStr);
            }
        }
    }
}
