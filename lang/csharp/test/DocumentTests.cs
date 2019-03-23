using STEP;
using System.Collections.Generic;
using System.IO;
using Xunit;
using Xunit.Abstractions;

namespace IFC.Tests
{
    public class DocumentTests
    {
        private const string BASELINES = "../../../baselines/";

        private readonly ITestOutputHelper output;

        public DocumentTests(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void Project()
        {
            // Create the document.
            var doc = new Document("Test Project", 
                "A test project for IFC-dotnet.",
                "ikeough", "keough", "ian", "ian@hypar.io",
                "hypar", "Hypar - Generative design for AEC.",
                "Office", "12345 Sesame Street.", "Gotham", null, "NY", "10005","USA");

            // Write the model to STEP.
            var stepPath = Path.Combine(BASELINES, "project.ifc");
            var step = doc.ToSTEP(stepPath);
            File.WriteAllText(stepPath, step);

            // Read the model from STEP
            List<STEPError> errors;
            var newDoc = new Document(stepPath, out errors);
            foreach(var e in errors)
            {
                output.WriteLine(e.Message);
            }
            Assert.Equal(0, errors.Count);
        }
    }
}