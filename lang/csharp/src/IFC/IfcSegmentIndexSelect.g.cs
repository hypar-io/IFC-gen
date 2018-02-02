
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSegmentIndexSelect : Select
    {
		public IfcSegmentIndexSelect(IfcArcIndex choice){ this.choice = choice; }
		public IfcSegmentIndexSelect(IfcLineIndex choice){ this.choice = choice; }

    }
}
