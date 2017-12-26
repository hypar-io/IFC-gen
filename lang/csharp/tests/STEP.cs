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

namespace IFC4.Tests
{
    public class STEP
    {
        private readonly ITestOutputHelper output;

        public STEP(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void ExampleModel_Deserialize_STEP()
        {
            var stepPath = "../../../models/example.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            var project = model.AllInstancesOfType<IfcProject>().FirstOrDefault();
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void ExampleModel_Serialize_STEP()
        {
            var stepPath = "../../../models/example.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            var outputPath = "../../../models/output.ifc";
            File.WriteAllText(outputPath, model.ToSTEP(outputPath));
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void OfficeBuilding_Deserialize_STEP()
        {
            var stepPath = "../../../models/AC-20-Smiley-West-10-Bldg.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void Hospital_Deserialize_STEP()
        {
            var stepPath = "../../../models/20160125WestRiverSide Hospital - IFC4-Autodesk_Hospital_Sprinkle.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void PropertySet_Deserialize_STEP()
        {
            var stepPath = "../../../models/propertySet.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
            ReportErrors(stepPath, errors);
        }

        [Fact]
        public void CanDeserializeStepWithSelect()
        {
            var stepPath = "../../../models/select.ifc";
            IList<STEPError> errors;
            var model = new Model(stepPath, new LocalStorageProvider(), out errors);
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
