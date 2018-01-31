
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcCurveStyleFontSelect : Select
    {
		public IfcCurveStyleFontSelect(IfcCurveStyleFont choice){ this.choice = choice; }
		public IfcCurveStyleFontSelect(IfcPreDefinedCurveFont choice){ this.choice = choice; }

    }
}
