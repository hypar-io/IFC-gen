using IFC.Storage;
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

        [Theory]
        [InlineData("../../../models/example.ifc", 283, 0)]
        [InlineData("../../../models/scientific_notation.ifc", 4, 0)]
        [InlineData("../../../models/AC-20-Smiley-West-10-Bldg.ifc", 205693, 1)]
        [InlineData("../../../models/select.ifc",0,4)]
        [InlineData("../../../models/property_set.ifc", 11, 0)]
        [InlineData("../../../models/20160125WestRiverSide Hospital - IFC4-Autodesk_Hospital_Sprinkle.ifc", 952819, 0)]
        public void DeserializeFromSTEP(string modelPath, int expectedInstanceCount, int expectedErrorCount)
        {
            IList<STEPError> errors;
            var model = new Model(modelPath, new LocalStorageProvider(), out errors);
            ReportErrors(modelPath, errors);
            Assert.Equal(expectedErrorCount, errors.Count);
            Assert.Equal(expectedInstanceCount, model.AllInstances.Count());

            // Serialize the model to STEP.
            errors.Clear();
            var outputPath = Path.GetTempFileName();
            Console.WriteLine($"Exporting IFC to {outputPath}.");
            File.WriteAllText(outputPath, model.ToSTEP(outputPath));
             
            ReportErrors(outputPath, errors);
            Assert.Equal(0, errors.Count);

            // Reload the new version of the model
            errors.Clear();
            var newModel = new Model(outputPath, new LocalStorageProvider(), out errors);
            Assert.Equal(expectedInstanceCount, newModel.AllInstances.Count());
            Assert.Equal(0, errors.Count);
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
