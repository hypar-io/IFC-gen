
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSolidOrShell : Select
    {
		public IfcSolidOrShell(IfcClosedShell choice){ this.choice = choice; }
		public IfcSolidOrShell(IfcSolidModel choice){ this.choice = choice; }

    }
}
