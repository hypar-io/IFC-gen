
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcStyleAssignmentSelect : Select
    {
		public IfcStyleAssignmentSelect(IfcPresentationStyle choice){ this.choice = choice; }
		public IfcStyleAssignmentSelect(IfcPresentationStyleAssignment choice){ this.choice = choice; }

    }
}
