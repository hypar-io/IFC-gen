
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcRotationalStiffnessSelect : Select
    {
		public IfcRotationalStiffnessSelect(IfcBoolean choice){ this.choice = choice; }
		public IfcRotationalStiffnessSelect(IfcRotationalStiffnessMeasure choice){ this.choice = choice; }

    }
}
