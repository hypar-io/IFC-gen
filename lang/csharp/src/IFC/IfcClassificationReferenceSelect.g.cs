
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcClassificationReferenceSelect : Select
    {
		public IfcClassificationReferenceSelect(IfcClassification choice){ this.choice = choice; }
		public IfcClassificationReferenceSelect(IfcClassificationReference choice){ this.choice = choice; }

    }
}
