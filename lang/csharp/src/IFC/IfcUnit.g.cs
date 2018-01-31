
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcUnit : Select
    {
		public IfcUnit(IfcDerivedUnit choice){ this.choice = choice; }
		public IfcUnit(IfcMonetaryUnit choice){ this.choice = choice; }
		public IfcUnit(IfcNamedUnit choice){ this.choice = choice; }

    }
}
