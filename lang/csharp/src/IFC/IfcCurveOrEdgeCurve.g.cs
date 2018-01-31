
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcCurveOrEdgeCurve : Select
    {
		public IfcCurveOrEdgeCurve(IfcBoundedCurve choice){ this.choice = choice; }
		public IfcCurveOrEdgeCurve(IfcEdgeCurve choice){ this.choice = choice; }

    }
}
