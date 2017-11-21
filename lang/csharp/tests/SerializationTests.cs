using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Serialization;
using Xunit;
using Xunit.Abstractions;
using IFC4;
using Newtonsoft.Json;

namespace test
{
	public class SerializationTests
	{
		private readonly ITestOutputHelper output;

		public SerializationTests(ITestOutputHelper output)
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
			Assert.Equal(p1.Name.Value, p2.Name.Value);
			Assert.Equal(p1.Description.Value, p2.Description.Value);

			var wall = new IfcWall(new IfcGloballyUniqueId("wall1"));
		}

		[Fact]
		public void ExampleModel_Serialize_JSON()
		{
			var stepPath = "../../../models/example.ifc";
			IList<STEPError> errors;
			var model = Model.FromSTEP(stepPath, out errors);
			var json = model.ToJSON();
		}

		[Fact]
		public void ExampleModel_Serialize_DOT()
		{
			var stepPath = "../../../models/example.ifc";
			IList<STEPError> errors;
			var model = Model.FromSTEP(stepPath, out errors);
			var dot = model.ToDOT();
		}

		[Fact]
		public void ExampleModel_Deserialize_STEP()
		{
			var sw = new System.Diagnostics.Stopwatch();
			sw.Start();
			var stepPath = "../../../models/example.ifc";
			IList<STEPError> errors;
			var model = Model.FromSTEP(stepPath, out errors);
			sw.Stop();
			Console.WriteLine($"{sw.Elapsed.ToString()} elapsed for reading the model.");
			ReportErrors(stepPath, errors);
		}

		[Fact]
		public void OfficeBuilding_Deserialize_STEP()
		{
			var sw = new System.Diagnostics.Stopwatch();
			sw.Start();
			var stepPath = "../../../models/AC-20-Smiley-West-10-Bldg.ifc";
			IList<STEPError> errors;
			var model = Model.FromSTEP(stepPath, out errors);
			sw.Stop();
			Console.WriteLine($"{sw.Elapsed.ToString()} elapsed for reading the model.");
			ReportErrors(stepPath, errors);
		}

		[Fact]
		public void Hospital_Deserialize_STEP()
		{
			var sw = new System.Diagnostics.Stopwatch();
			sw.Start();
			var stepPath = "../../../models/20160125WestRiverSide Hospital - IFC4-Autodesk_Hospital_Sprinkle.ifc";
			IList<STEPError> errors;
			var model = Model.FromSTEP(stepPath, out errors);
			sw.Stop();
			Console.WriteLine($"{sw.Elapsed.ToString()} elapsed for reading the model.");
			ReportErrors(stepPath, errors);
		}

		private void ReportErrors(string filePath, IEnumerable<STEPError> errors)
		{	
			if(!errors.Any())
			{
				return;
			}

			Console.WriteLine($"The following errors occurred while parsing {filePath}:");
			foreach(var e in errors)
			{
				Console.WriteLine(e.Message);
			}
		}
	}
}
