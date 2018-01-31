
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSurfaceStyleElementSelect : Select
    {
		public IfcSurfaceStyleElementSelect(IfcExternallyDefinedSurfaceStyle choice){ this.choice = choice; }
		public IfcSurfaceStyleElementSelect(IfcSurfaceStyleLighting choice){ this.choice = choice; }
		public IfcSurfaceStyleElementSelect(IfcSurfaceStyleRefraction choice){ this.choice = choice; }
		public IfcSurfaceStyleElementSelect(IfcSurfaceStyleShading choice){ this.choice = choice; }
		public IfcSurfaceStyleElementSelect(IfcSurfaceStyleWithTextures choice){ this.choice = choice; }

    }
}
