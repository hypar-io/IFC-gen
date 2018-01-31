

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryopenprofiledef.htm"/>
	/// </summary>
	public  partial class IfcArbitraryOpenProfileDef : IfcProfileDef
	{
		public IfcBoundedCurve Curve{get;set;} 


		/// <summary>
		/// Construct a IfcArbitraryOpenProfileDef with all required attributes.
		/// </summary>
		public IfcArbitraryOpenProfileDef(IfcProfileTypeEnum profileType,IfcBoundedCurve curve):base(profileType)
		{

			Curve = curve;

		}
		/// <summary>
		/// Construct a IfcArbitraryOpenProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcArbitraryOpenProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcBoundedCurve curve):base(profileType,profileName)
		{

			Curve = curve;

		}
		public static new IfcArbitraryOpenProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcArbitraryOpenProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Curve != null ? Curve.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
