
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcLayeredItem : Select
    {
		public IfcLayeredItem(IfcRepresentation choice){ this.choice = choice; }
		public IfcLayeredItem(IfcRepresentationItem choice){ this.choice = choice; }

    }
}
