
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcProcessSelect : Select
    {
		public IfcProcessSelect(IfcProcess choice){ this.choice = choice; }
		public IfcProcessSelect(IfcTypeProcess choice){ this.choice = choice; }

    }
}
