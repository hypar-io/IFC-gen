
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcResourceSelect : Select
    {
		public IfcResourceSelect(IfcResource choice){ this.choice = choice; }
		public IfcResourceSelect(IfcTypeResource choice){ this.choice = choice; }

    }
}
