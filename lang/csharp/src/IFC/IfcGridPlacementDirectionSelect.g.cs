
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcGridPlacementDirectionSelect : Select
    {
		public IfcGridPlacementDirectionSelect(IfcDirection choice){ this.choice = choice; }
		public IfcGridPlacementDirectionSelect(IfcVirtualGridIntersection choice){ this.choice = choice; }

    }
}
