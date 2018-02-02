
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcColourOrFactor : Select
    {
		public IfcColourOrFactor(IfcColourRgb choice){ this.choice = choice; }
		public IfcColourOrFactor(IfcNormalisedRatioMeasure choice){ this.choice = choice; }

    }
}
