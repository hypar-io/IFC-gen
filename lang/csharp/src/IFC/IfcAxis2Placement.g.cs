
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcAxis2Placement : Select
    {
		public IfcAxis2Placement(IfcAxis2Placement2D choice){ this.choice = choice; }
		public IfcAxis2Placement(IfcAxis2Placement3D choice){ this.choice = choice; }

    }
}
