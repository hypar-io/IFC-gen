

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightdistributiondata.htm"/>
	/// </summary>
	public  partial class IfcLightDistributionData : BaseIfc
	{
		public IfcPlaneAngleMeasure MainPlaneAngle{get;set;} 
		public List<IfcPlaneAngleMeasure> SecondaryPlaneAngle{get;set;} 
		public List<IfcLuminousIntensityDistributionMeasure> LuminousIntensity{get;set;} 


		/// <summary>
		/// Construct a IfcLightDistributionData with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLightDistributionData(IfcPlaneAngleMeasure mainPlaneAngle,List<IfcPlaneAngleMeasure> secondaryPlaneAngle,List<IfcLuminousIntensityDistributionMeasure> luminousIntensity):base()
		{

			MainPlaneAngle = mainPlaneAngle;
			SecondaryPlaneAngle = secondaryPlaneAngle;
			LuminousIntensity = luminousIntensity;

		}
		public static  IfcLightDistributionData FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLightDistributionData>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(MainPlaneAngle != null ? MainPlaneAngle.ToStepValue() : "$");
			parameters.Add(SecondaryPlaneAngle != null ? SecondaryPlaneAngle.ToStepValue() : "$");
			parameters.Add(LuminousIntensity != null ? LuminousIntensity.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
