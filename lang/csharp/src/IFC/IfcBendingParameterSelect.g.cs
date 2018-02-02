
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcBendingParameterSelect : Select
    {
		public IfcBendingParameterSelect(IfcLengthMeasure choice){ this.choice = choice; }
		public IfcBendingParameterSelect(IfcPlaneAngleMeasure choice){ this.choice = choice; }

    }
}
