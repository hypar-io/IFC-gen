using STEP;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Xunit;
using Xunit.Abstractions;

namespace IFC.Tests
{
    public class STEPTests
    {
        private readonly ITestOutputHelper output;

        public STEPTests(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Theory]
        [InlineData("../../../models/example.ifc", 283, 0)]
        [InlineData("../../../models/scientific_notation.ifc", 4, 0)]
        [InlineData("../../../models/AC-20-Smiley-West-10-Bldg.ifc", 110176, 0)]
        [InlineData("../../../models/select.ifc", 4, 0)]
        [InlineData("../../../models/property_set.ifc", 11, 1)]
        [InlineData("../../../models/20160125WestRiverSide Hospital - IFC4-Autodesk_Hospital_Sprinkle.ifc", 488638, 1)]
        [InlineData("../../../models/Regression_49.ifc", 2, 0)]
        [InlineData("../../../models/Regression_50.ifc", 5, 0)]
        [InlineData("../../../models/date_time.ifc", 0, 0)]
        [InlineData("../../../models/label_with_apostrophe.ifc", 3, 0)]
        [InlineData("../../../models/BIMIT-Sample-Model.ifc", 223622, 0)]
        [InlineData("../../../models/points_list.ifc", 1, 0)]
        [InlineData("../../../models/derived_unit_element.ifc", 5, 0)]
        [InlineData("../../../models/indexed_polycurve.ifc", 2, 0)]
        public void DeserializeFromSTEP(string modelPath, int expectedInstanceCount, int expectedErrorCount)
        {
            var model = new Document(modelPath, out List<STEPError> errors);
            ReportErrors(modelPath, errors);
            Assert.Equal(expectedErrorCount, errors.Count);
            Assert.Equal(expectedInstanceCount, model.AllEntities.Count());

            // Serialize the model to STEP.
            errors.Clear();
            var outputPath = Path.Combine(Path.GetTempPath(), Path.GetFileName(modelPath));
            output.WriteLine($"Exporting IFC to {outputPath}.");
            var step = model.ToSTEP();
            File.WriteAllText(outputPath, step);

            // Reload the new version of the model
            errors.Clear();
            var newModel = new Document(outputPath, out errors);
            Assert.Equal(expectedInstanceCount, newModel.AllEntities.Count());
            Assert.Equal(0, errors.Count);
        }

        private void ReportErrors(string filePath, IEnumerable<STEPError> errors)
        {
            if (!errors.Any())
            {
                return;
            }

            output.WriteLine($"The following errors occurred while parsing {filePath}:");
            foreach (var e in errors)
            {
                output.WriteLine(e.Message);
            }
        }
    }
}
