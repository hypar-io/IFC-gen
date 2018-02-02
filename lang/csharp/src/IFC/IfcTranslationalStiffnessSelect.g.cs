
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcTranslationalStiffnessSelect : Select
    {
		public IfcTranslationalStiffnessSelect(IfcBoolean choice){ this.choice = choice; }
		public IfcTranslationalStiffnessSelect(IfcLinearStiffnessMeasure choice){ this.choice = choice; }

    }
}
