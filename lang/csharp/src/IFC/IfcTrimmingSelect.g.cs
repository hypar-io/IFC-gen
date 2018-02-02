
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcTrimmingSelect : Select
    {
		public IfcTrimmingSelect(IfcCartesianPoint choice){ this.choice = choice; }
		public IfcTrimmingSelect(IfcParameterValue choice){ this.choice = choice; }

    }
}
