

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryclosedprofiledef.htm"/>
	/// </summary>
	public  partial class IfcArbitraryClosedProfileDef : IfcProfileDef
	{
		public IfcCurve OuterCurve{get;set;} 


		/// <summary>
		/// Construct a IfcArbitraryClosedProfileDef with all required attributes.
		/// </summary>
		public IfcArbitraryClosedProfileDef(IfcProfileTypeEnum profileType,IfcCurve outerCurve):base(profileType)
		{

			OuterCurve = outerCurve;

		}
		/// <summary>
		/// Construct a IfcArbitraryClosedProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcArbitraryClosedProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcCurve outerCurve):base(profileType,profileName)
		{

			OuterCurve = outerCurve;

		}
		public static new IfcArbitraryClosedProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcArbitraryClosedProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(OuterCurve != null ? OuterCurve.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
