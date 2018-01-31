
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcClassificationSelect : Select
    {
		public IfcClassificationSelect(IfcClassification choice){ this.choice = choice; }
		public IfcClassificationSelect(IfcClassificationReference choice){ this.choice = choice; }

    }
}
