
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcGeometricSetSelect : Select
    {
		public IfcGeometricSetSelect(IfcCurve choice){ this.choice = choice; }
		public IfcGeometricSetSelect(IfcPoint choice){ this.choice = choice; }
		public IfcGeometricSetSelect(IfcSurface choice){ this.choice = choice; }

    }
}
