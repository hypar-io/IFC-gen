using Express;
using System;

namespace IFC4.Generators{
    public class ProtobufTestGenerator : ITestGenerator{
        public string Begin(){
            throw new NotImplementedException();
        }

        public string End(){
            throw new NotImplementedException();
        }

        public string FileName{
            get{return "IFC.tests.g.proto";}
        }

        public string EntityTest(Entity data){
            throw new NotImplementedException();
        }
    }
    
}