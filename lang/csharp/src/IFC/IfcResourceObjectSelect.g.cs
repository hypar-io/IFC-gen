
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcResourceObjectSelect : Select
    {
		public IfcResourceObjectSelect(IfcActorRole choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcAppliedValue choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcApproval choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcConstraint choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcContextDependentUnit choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcConversionBasedUnit choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcExternalInformation choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcExternalReference choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcMaterialDefinition choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcOrganization choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcPerson choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcPersonAndOrganization choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcPhysicalQuantity choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcProfileDef choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcPropertyAbstraction choice){ this.choice = choice; }
		public IfcResourceObjectSelect(IfcTimeSeries choice){ this.choice = choice; }

    }
}
