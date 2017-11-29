using Express;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace IFC4.Generators
{
    public class CsharpTestGenerator : ITestGenerator{
        public string Begin(){
            return $@"
using System;
using Xunit;
using Xunit.Abstractions;

namespace IFC4{{
    public class IFCTestFixture : IDisposable{{
        
        public IFCTestFixture(){{

        }}

        public void Dispose(){{

        }}
    }}
    
    public class IFCTests : IClassFixture<IFCTestFixture>{{";
        }

        public string End(){
            return @"
    }
}";
        }

        public string FileName{
            get{return "IFC.tests.g.cs";}
        }

        public string EntityTest(Entity data){
            return $@"
        [Fact]
        public void {data.Name}_Test(){{
            Assert.True(false, ""Implement me!"");
        }}";
        }
    }
}