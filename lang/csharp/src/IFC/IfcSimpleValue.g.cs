
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSimpleValue : Select
    {
		public IfcSimpleValue(IfcBinary choice){ this.choice = choice; }
		public IfcSimpleValue(IfcBoolean choice){ this.choice = choice; }
		public IfcSimpleValue(IfcDate choice){ this.choice = choice; }
		public IfcSimpleValue(IfcDateTime choice){ this.choice = choice; }
		public IfcSimpleValue(IfcDuration choice){ this.choice = choice; }
		public IfcSimpleValue(IfcIdentifier choice){ this.choice = choice; }
		public IfcSimpleValue(IfcInteger choice){ this.choice = choice; }
		public IfcSimpleValue(IfcLabel choice){ this.choice = choice; }
		public IfcSimpleValue(IfcLogical choice){ this.choice = choice; }
		public IfcSimpleValue(IfcPositiveInteger choice){ this.choice = choice; }
		public IfcSimpleValue(IfcReal choice){ this.choice = choice; }
		public IfcSimpleValue(IfcText choice){ this.choice = choice; }
		public IfcSimpleValue(IfcTime choice){ this.choice = choice; }
		public IfcSimpleValue(IfcTimeStamp choice){ this.choice = choice; }

    }
}
