
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcShell : Select
    {
		public IfcShell(IfcClosedShell choice){ this.choice = choice; }
		public IfcShell(IfcOpenShell choice){ this.choice = choice; }

    }
}
