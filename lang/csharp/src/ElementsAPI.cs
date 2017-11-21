using IFC4;
using IfcGuid;
using System;

namespace Elements{
    public static class Elements{
        public static IfcProject CreateProject(string name, string description){

            if(string.IsNullOrEmpty(name)){
                throw new ArgumentException("You must supply a valid name.");
            }

            if(string.IsNullOrEmpty(description)){
                throw new ArgumentException("You must supply a valid description.");
            }

            var id = new IfcGloballyUniqueId(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));

            var p = new IfcProject(id);
            p.Description = description;
            p.Name = name;

            return p;
        }

        public static IfcWall CreateWall(){
            var id = new IfcGloballyUniqueId(IfcGuid.IfcGuid.ToIfcGuid(Guid.NewGuid()));

            var w = new IfcWall(id);
            w.ContainedInStructure = new IfcRelContainedInSpatialStructure()
            return w;
        }
    }
}
