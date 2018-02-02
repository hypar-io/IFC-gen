
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcValue : Select
    {
		public IfcValue(IfcDerivedMeasureValue choice){ this.choice = choice; }
		public IfcValue(IfcMeasureValue choice){ this.choice = choice; }
		public IfcValue(IfcSimpleValue choice){ this.choice = choice; }

    }
}
