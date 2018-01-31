
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcPropertySetDefinitionSelect : Select
    {
		public IfcPropertySetDefinitionSelect(IfcPropertySetDefinition choice){ this.choice = choice; }
		public IfcPropertySetDefinitionSelect(IfcPropertySetDefinitionSet choice){ this.choice = choice; }

    }
}
