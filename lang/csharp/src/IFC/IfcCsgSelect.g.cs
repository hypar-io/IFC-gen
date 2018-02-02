
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcCsgSelect : Select
    {
		public IfcCsgSelect(IfcBooleanResult choice){ this.choice = choice; }
		public IfcCsgSelect(IfcCsgPrimitive3D choice){ this.choice = choice; }

    }
}
