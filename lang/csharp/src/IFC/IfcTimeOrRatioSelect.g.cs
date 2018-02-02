
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcTimeOrRatioSelect : Select
    {
		public IfcTimeOrRatioSelect(IfcDuration choice){ this.choice = choice; }
		public IfcTimeOrRatioSelect(IfcRatioMeasure choice){ this.choice = choice; }

    }
}
