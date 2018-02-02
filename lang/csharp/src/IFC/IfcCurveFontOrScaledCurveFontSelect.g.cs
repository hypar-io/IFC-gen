
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcCurveFontOrScaledCurveFontSelect : Select
    {
		public IfcCurveFontOrScaledCurveFontSelect(IfcCurveStyleFontAndScaling choice){ this.choice = choice; }
		public IfcCurveFontOrScaledCurveFontSelect(IfcCurveStyleFontSelect choice){ this.choice = choice; }

    }
}
