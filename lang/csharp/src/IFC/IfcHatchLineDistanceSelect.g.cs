
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcHatchLineDistanceSelect : Select
    {
		public IfcHatchLineDistanceSelect(IfcPositiveLengthMeasure choice){ this.choice = choice; }
		public IfcHatchLineDistanceSelect(IfcVector choice){ this.choice = choice; }

    }
}
