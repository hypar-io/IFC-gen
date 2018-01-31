
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcCoordinateReferenceSystemSelect : Select
    {
		public IfcCoordinateReferenceSystemSelect(IfcCoordinateReferenceSystem choice){ this.choice = choice; }
		public IfcCoordinateReferenceSystemSelect(IfcGeometricRepresentationContext choice){ this.choice = choice; }

    }
}
