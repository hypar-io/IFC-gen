using IFC.Storage;
using STEP;
using System.Collections.Generic;
using Xunit;
using Xunit.Abstractions;

namespace IFC.Tests
{
    public class DOT
    {
        private readonly ITestOutputHelper output;

        public DOT(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void ExampleModel_Serialize_DOT()
        {
            var stepPath = "../../../models/example.ifc";
            IList<STEPError> errors = null;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            var dot = model.ToDOT();
        }
    }
}