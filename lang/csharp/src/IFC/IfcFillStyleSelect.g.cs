
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcFillStyleSelect : Select
    {
		public IfcFillStyleSelect(IfcColour choice){ this.choice = choice; }
		public IfcFillStyleSelect(IfcExternallyDefinedHatchStyle choice){ this.choice = choice; }
		public IfcFillStyleSelect(IfcFillAreaStyleHatching choice){ this.choice = choice; }
		public IfcFillStyleSelect(IfcFillAreaStyleTiles choice){ this.choice = choice; }

    }
}
