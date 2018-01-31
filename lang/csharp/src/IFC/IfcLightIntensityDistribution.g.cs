

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightintensitydistribution.htm"/>
	/// </summary>
	public  partial class IfcLightIntensityDistribution : BaseIfc
	{
		public IfcLightDistributionCurveEnum LightDistributionCurve{get;set;} 
		public List<IfcLightDistributionData> DistributionData{get;set;} 


		/// <summary>
		/// Construct a IfcLightIntensityDistribution with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightIntensityDistribution(IfcLightDistributionCurveEnum lightDistributionCurve,List<IfcLightDistributionData> distributionData):base()
		{

			LightDistributionCurve = lightDistributionCurve;
			DistributionData = distributionData;

		}
		public static  IfcLightIntensityDistribution FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightIntensityDistribution>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(LightDistributionCurve.ToStepValue());
			parameters.Add(DistributionData != null ? DistributionData.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
