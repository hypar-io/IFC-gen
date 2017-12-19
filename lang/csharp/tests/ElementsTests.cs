using Elements;
using Elements.Storage;
using System;
using System.IO;
using Xunit;

namespace IFC4.Tests
{
    public class Elements
    {

        [Fact]
        public void CanConstructAProject()
        {
            var id = new IfcGloballyUniqueId(TestId());
            var p = new IfcProject(id);
            Assert.NotNull(p);
        }

        [Fact]
        public void Project()
        {
            var m = new Model(new LocalStorageProvider());

            var p = m.AddProject("Test Project", "A test project.");
            var stepPath = "../../../models/project_test.ifc";
            File.WriteAllText(stepPath, m.ToSTEP(stepPath));

            /*var s = doc.AddSite(p);
            var b = doc.AddBuilding(s);
            var storey = doc.AddBuildingStorey(b, 0.0);
            var e = doc.AddBuildingElement(storey, "Test", "A test element.");
            */

            /*var properties = new List<IfcProperty>();
            var p1 = new IfcPropertySingleValue(new IfcIdentifier("foo"));
            p1.NominalValue = new IfcPositiveLengthMeasure(new IfcLengthMeasure(2.0));
            p1.Unit = new IfcUnit(new IfcSIUnit(new IfcDimensionalExponents(1,1,1,1,1,1,1), IfcUnitEnum.LENGTHUNIT, IfcSIUnitName.METRE));
            var pset = new IfcPropertySet(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()), properties);
            */
            //Assert.Equal(5, doc.AllInstanceOfType<IfcRelAggregates>().Count());

            // ensure that relationships are correctly generated
            // and have both ends set.

        }

        private IfcGloballyUniqueId TestId()
        {
            return IfcGuid.ToIfcGuid(Guid.NewGuid());
        }
    }
}