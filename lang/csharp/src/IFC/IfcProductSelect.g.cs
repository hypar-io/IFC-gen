
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcProductSelect : Select
    {
		public IfcProductSelect(IfcProduct choice){ this.choice = choice; }
		public IfcProductSelect(IfcTypeProduct choice){ this.choice = choice; }

    }
}
