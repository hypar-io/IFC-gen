
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcMetricValueSelect : Select
    {
		public IfcMetricValueSelect(IfcAppliedValue choice){ this.choice = choice; }
		public IfcMetricValueSelect(IfcMeasureWithUnit choice){ this.choice = choice; }
		public IfcMetricValueSelect(IfcReference choice){ this.choice = choice; }
		public IfcMetricValueSelect(IfcTable choice){ this.choice = choice; }
		public IfcMetricValueSelect(IfcTimeSeries choice){ this.choice = choice; }
		public IfcMetricValueSelect(IfcValue choice){ this.choice = choice; }

    }
}
