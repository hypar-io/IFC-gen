
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSurfaceOrFaceSurface : Select
    {
		public IfcSurfaceOrFaceSurface(IfcFaceBasedSurfaceModel choice){ this.choice = choice; }
		public IfcSurfaceOrFaceSurface(IfcFaceSurface choice){ this.choice = choice; }
		public IfcSurfaceOrFaceSurface(IfcSurface choice){ this.choice = choice; }

    }
}
