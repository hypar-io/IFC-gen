
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcPointOrVertexPoint : Select
    {
		public IfcPointOrVertexPoint(IfcPoint choice){ this.choice = choice; }
		public IfcPointOrVertexPoint(IfcVertexPoint choice){ this.choice = choice; }

    }
}
