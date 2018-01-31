
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcVectorOrDirection : Select
    {
		public IfcVectorOrDirection(IfcDirection choice){ this.choice = choice; }
		public IfcVectorOrDirection(IfcVector choice){ this.choice = choice; }

    }
}
