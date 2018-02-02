
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcLightDistributionDataSourceSelect : Select
    {
		public IfcLightDistributionDataSourceSelect(IfcExternalReference choice){ this.choice = choice; }
		public IfcLightDistributionDataSourceSelect(IfcLightIntensityDistribution choice){ this.choice = choice; }

    }
}
