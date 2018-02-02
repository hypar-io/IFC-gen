
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcCurveOnSurface : Select
    {
		public IfcCurveOnSurface(IfcCompositeCurveOnSurface choice){ this.choice = choice; }
		public IfcCurveOnSurface(IfcPcurve choice){ this.choice = choice; }
		public IfcCurveOnSurface(IfcSurfaceCurve choice){ this.choice = choice; }

    }
}
