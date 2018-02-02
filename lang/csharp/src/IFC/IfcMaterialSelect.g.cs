
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcMaterialSelect : Select
    {
		public IfcMaterialSelect(IfcMaterialDefinition choice){ this.choice = choice; }
		public IfcMaterialSelect(IfcMaterialList choice){ this.choice = choice; }
		public IfcMaterialSelect(IfcMaterialUsageDefinition choice){ this.choice = choice; }

    }
}
