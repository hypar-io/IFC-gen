using Xunit;
using Xunit.Abstractions;
using IFC4;
using IfcGuid;
using System;

namespace test
{
    public class ProjectTests{
        [Fact]
        public void CanConstructAProject()
        {
            var id = new IfcGloballyUniqueId(TestId());
            var p = new IfcProject(id);
            Assert.NotNull(p);
        }

        [Fact]
        public void Project(){
            var doc = new Document(new LocalStorageProvider());
            
            var p = doc.AddProject("Test Project", "A test project.");
            var s = doc.AddSite(p);
            var b = doc.AddBuilding(s);
            var storey = doc.AddBuildingStorey(b, 0.0);
            var e = doc.AddBuildingElement(storey, "Test", "A test element.");
            
            //Assert.Equal(5, doc.AllInstanceOfType<IfcRelAggregates>().Count());

            // ensure that relationships are correctly generated
            // and have both ends set.
        }

        private IfcGloballyUniqueId TestId(){
            return IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid());
        }
    }
}