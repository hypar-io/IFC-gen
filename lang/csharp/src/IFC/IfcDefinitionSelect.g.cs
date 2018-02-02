
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcDefinitionSelect : Select
    {
		public IfcDefinitionSelect(IfcObjectDefinition choice){ this.choice = choice; }
		public IfcDefinitionSelect(IfcPropertyDefinition choice){ this.choice = choice; }

    }
}
