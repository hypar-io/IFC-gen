

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryprofiledefwithvoids.htm"/>
	/// </summary>
	public  partial class IfcArbitraryProfileDefWithVoids : IfcArbitraryClosedProfileDef
	{
		public List<IfcCurve> InnerCurves{get;set;} 


		/// <summary>
		/// Construct a IfcArbitraryProfileDefWithVoids with all required attributes.
		/// </summary>
		public IfcArbitraryProfileDefWithVoids(IfcProfileTypeEnum profileType,IfcCurve outerCurve,List<IfcCurve> innerCurves):base(profileType,outerCurve)
		{

			InnerCurves = innerCurves;

		}
		/// <summary>
		/// Construct a IfcArbitraryProfileDefWithVoids with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcArbitraryProfileDefWithVoids(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcCurve outerCurve,List<IfcCurve> innerCurves):base(profileType,profileName,outerCurve)
		{

			InnerCurves = innerCurves;

		}
		public static new IfcArbitraryProfileDefWithVoids FromJSON(string json){ return JsonConvert.DeserializeObject<IfcArbitraryProfileDefWithVoids>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(OuterCurve != null ? OuterCurve.ToStepValue() : "$");
			parameters.Add(InnerCurves != null ? InnerCurves.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
