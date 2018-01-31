
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcObjectReferenceSelect : Select
    {
		public IfcObjectReferenceSelect(IfcAddress choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcAppliedValue choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcExternalReference choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcMaterialDefinition choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcOrganization choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcPerson choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcPersonAndOrganization choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcTable choice){ this.choice = choice; }
		public IfcObjectReferenceSelect(IfcTimeSeries choice){ this.choice = choice; }

    }
}
