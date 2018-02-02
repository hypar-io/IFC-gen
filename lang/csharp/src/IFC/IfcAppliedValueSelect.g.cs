
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcAppliedValueSelect : Select
    {
		public IfcAppliedValueSelect(IfcMeasureWithUnit choice){ this.choice = choice; }
		public IfcAppliedValueSelect(IfcReference choice){ this.choice = choice; }
		public IfcAppliedValueSelect(IfcValue choice){ this.choice = choice; }

    }
}
