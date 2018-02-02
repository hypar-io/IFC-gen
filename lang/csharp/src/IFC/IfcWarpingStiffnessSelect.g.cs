
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcWarpingStiffnessSelect : Select
    {
		public IfcWarpingStiffnessSelect(IfcBoolean choice){ this.choice = choice; }
		public IfcWarpingStiffnessSelect(IfcWarpingMomentMeasure choice){ this.choice = choice; }

    }
}
