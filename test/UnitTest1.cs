using System;
using System.IO;
using System.Xml.Serialization;
using Xunit;
using IFC4;

namespace test
{
	public class UnitTest1
	{
		[Fact]
		public void CreateWall()
		{
			var building = new IfcBuilding();
			building.Name = "Ifc Test Building";
			
			var project = new IfcProject();
			project.Name = "Ifc Test Project";
			project.UnitsInContext = new IfcUnitAssignment();
			project.UnitsInContext.Units = new IfcUnitAssignmentUnits();

		}
	}
}
