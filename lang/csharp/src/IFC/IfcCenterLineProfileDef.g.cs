

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccenterlineprofiledef.htm"/>
	/// </summary>
	public  partial class IfcCenterLineProfileDef : IfcArbitraryOpenProfileDef
	{
		public IfcPositiveLengthMeasure Thickness{get;set;} 


		/// <summary>
		/// Construct a IfcCenterLineProfileDef with all required attributes.
		/// </summary>
		public IfcCenterLineProfileDef(IfcProfileTypeEnum profileType,IfcBoundedCurve curve,IfcPositiveLengthMeasure thickness):base(profileType,curve)
		{

			Thickness = thickness;

		}
		/// <summary>
		/// Construct a IfcCenterLineProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCenterLineProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcBoundedCurve curve,IfcPositiveLengthMeasure thickness):base(profileType,profileName,curve)
		{

			Thickness = thickness;

		}
		public static new IfcCenterLineProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCenterLineProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Curve != null ? Curve.ToStepValue() : "$");
			parameters.Add(Thickness != null ? Thickness.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
