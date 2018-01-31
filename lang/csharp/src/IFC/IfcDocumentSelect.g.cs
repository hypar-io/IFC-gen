
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcDocumentSelect : Select
    {
		public IfcDocumentSelect(IfcDocumentInformation choice){ this.choice = choice; }
		public IfcDocumentSelect(IfcDocumentReference choice){ this.choice = choice; }

    }
}
