

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroundedrectangleprofiledef.htm"/>
	/// </summary>
	public  partial class IfcRoundedRectangleProfileDef : IfcRectangleProfileDef
	{
		public IfcPositiveLengthMeasure RoundingRadius{get;set;} 


		/// <summary>
		/// Construct a IfcRoundedRectangleProfileDef with all required attributes.
		/// </summary>
		public IfcRoundedRectangleProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure xDim,IfcPositiveLengthMeasure yDim,IfcPositiveLengthMeasure roundingRadius):base(profileType,xDim,yDim)
		{

			RoundingRadius = roundingRadius;

		}
		/// <summary>
		/// Construct a IfcRoundedRectangleProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRoundedRectangleProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure xDim,IfcPositiveLengthMeasure yDim,IfcPositiveLengthMeasure roundingRadius):base(profileType,profileName,position,xDim,yDim)
		{

			RoundingRadius = roundingRadius;

		}
		public static new IfcRoundedRectangleProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRoundedRectangleProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(XDim != null ? XDim.ToStepValue() : "$");
			parameters.Add(YDim != null ? YDim.ToStepValue() : "$");
			parameters.Add(RoundingRadius != null ? RoundingRadius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
