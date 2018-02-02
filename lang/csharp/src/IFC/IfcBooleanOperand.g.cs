
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcBooleanOperand : Select
    {
		public IfcBooleanOperand(IfcBooleanResult choice){ this.choice = choice; }
		public IfcBooleanOperand(IfcCsgPrimitive3D choice){ this.choice = choice; }
		public IfcBooleanOperand(IfcHalfSpaceSolid choice){ this.choice = choice; }
		public IfcBooleanOperand(IfcSolidModel choice){ this.choice = choice; }
		public IfcBooleanOperand(IfcTessellatedFaceSet choice){ this.choice = choice; }

    }
}
