using Elements;
using Elements.Storage;
using Newtonsoft.Json;
using STEP;
using System.Collections.Generic;
using Xunit;
using Xunit.Abstractions;

namespace IFC4.Tests
{
    public class JSON
    {
        private readonly ITestOutputHelper output;

        public JSON(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void SerializeProject()
        {
            var id = new IfcGloballyUniqueId("12345");

            var p1 = new IfcProject(id);
            p1.Name = "Test Project";
            p1.Description = "A test of IFC-dotnet.";

            var p2 = JsonConvert.DeserializeObject<IfcProject>(p1.ToJSON());
            //Assert.Equal(p1.Name.Value, p2.Name.Value);
            //Assert.Equal(p1.Description.Value, p2.Description.Value);

            var wall = new IfcWall(new IfcGloballyUniqueId("wall1"));
        }

        [Fact]
        public void ExampleModel_Serialize_JSON()
        {
            var stepPath = "../../../models/example.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            var json = model.ToJSON();
        }
    }
}