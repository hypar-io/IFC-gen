
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcActorSelect : Select
    {
		public IfcActorSelect(IfcOrganization choice){ this.choice = choice; }
		public IfcActorSelect(IfcPerson choice){ this.choice = choice; }
		public IfcActorSelect(IfcPersonAndOrganization choice){ this.choice = choice; }

    }
}
