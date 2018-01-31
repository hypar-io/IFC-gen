
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcPresentationStyleSelect : Select
    {
		public IfcPresentationStyleSelect(IfcCurveStyle choice){ this.choice = choice; }
		public IfcPresentationStyleSelect(IfcFillAreaStyle choice){ this.choice = choice; }
		public IfcPresentationStyleSelect(IfcSurfaceStyle choice){ this.choice = choice; }
		public IfcPresentationStyleSelect(IfcTextStyle choice){ this.choice = choice; }

    }
}
