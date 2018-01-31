using Express;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace IFC4.Generators
{
    public class TypescriptTestGenerator : ITestGenerator{
        public string Begin()
        {
            return string.Empty;
        }

        public string End()
        {
            return string.Empty;
        }

        public string FileName
        {
            get{return "IFC.tests.g.ts";}
        }

        public string EntityTest(Entity data)
        {
            return string.Empty;
        }
    }
}