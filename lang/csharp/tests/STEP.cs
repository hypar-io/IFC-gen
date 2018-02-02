using Elements;
using Elements.Storage;
using Newtonsoft.Json;
using STEP;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Xunit;
using Xunit.Abstractions;

namespace IFC.Tests
{
    public class STEP
    {
        private readonly ITestOutputHelper output;

        public STEP(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void ExampleModel_Deserialize()
        {
            var stepPath = "../../../models/example.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            ReportErrors(stepPath, errors);
            Assert.Equal(283, model.AllInstances.Count());
        }

        [Fact]
        public void ExampleModel_Serialize()
        {
            // Load the example model
            var stepPath = "../../../models/example.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            Assert.Equal(283, model.AllInstances.Count());
            
            // Serialize the example model
            var outputPath = "../../../models/output.ifc";
            File.WriteAllText(outputPath, model.ToSTEP(outputPath));
            ReportErrors(stepPath, errors);

            // Reload the new version of the model
            var newModel = new Model(outputPath, new LocalStorageProvider(), out errors);
            Assert.Equal(283, newModel.AllInstances.Count());
        }

        [Fact]
        public void ScientificNotation_Deserialize()
        {
            var stepPath = "../../../models/scientific_notation.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            Assert.Equal(4, model.AllInstances.Count());
        }

        [Fact]
        public void OfficeBuilding_Deserialize_STEP()
        {
            var stepPath = "../../../models/AC-20-Smiley-West-10-Bldg.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            //Assert.Equal(205693, model.AllInstances.Count());
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void Hospital_Deserialize()
        {
            var stepPath = "../../../models/20160125WestRiverSide Hospital - IFC4-Autodesk_Hospital_Sprinkle.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            //Assert.Equal(952819, model.AllInstances.Count());
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void PropertySet_Deserialize()
        {
            var stepPath = "../../../models/property_set.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            Assert.Equal(11, model.AllInstances.Count());
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void Select_Deserialize()
        {
            var stepPath = "../../../models/select.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            Assert.Equal(4, model.AllInstances.Count());
            ReportErrors(stepPath, errors);
        }

        private void ReportErrors(string filePath, IEnumerable<STEPError> errors)
        {
            if (!errors.Any())
            {
                return;
            }

            Console.WriteLine($"The following errors occurred while parsing {filePath}:");
            foreach (var e in errors)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
