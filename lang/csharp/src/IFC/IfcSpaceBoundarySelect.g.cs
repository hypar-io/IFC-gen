
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSpaceBoundarySelect : Select
    {
		public IfcSpaceBoundarySelect(IfcExternalSpatialElement choice){ this.choice = choice; }
		public IfcSpaceBoundarySelect(IfcSpace choice){ this.choice = choice; }

    }
}
