
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcStructuralActivityAssignmentSelect : Select
    {
		public IfcStructuralActivityAssignmentSelect(IfcElement choice){ this.choice = choice; }
		public IfcStructuralActivityAssignmentSelect(IfcStructuralItem choice){ this.choice = choice; }

    }
}
