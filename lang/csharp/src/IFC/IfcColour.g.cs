
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcColour : Select
    {
		public IfcColour(IfcColourSpecification choice){ this.choice = choice; }
		public IfcColour(IfcPreDefinedColour choice){ this.choice = choice; }

    }
}
