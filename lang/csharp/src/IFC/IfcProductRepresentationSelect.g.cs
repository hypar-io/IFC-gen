
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcProductRepresentationSelect : Select
    {
		public IfcProductRepresentationSelect(IfcProductDefinitionShape choice){ this.choice = choice; }
		public IfcProductRepresentationSelect(IfcRepresentationMap choice){ this.choice = choice; }

    }
}
