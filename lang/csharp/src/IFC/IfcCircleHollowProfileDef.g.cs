

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccirclehollowprofiledef.htm"/>
	/// </summary>
	public  partial class IfcCircleHollowProfileDef : IfcCircleProfileDef
	{
		public IfcPositiveLengthMeasure WallThickness{get;set;} 


		/// <summary>
		/// Construct a IfcCircleHollowProfileDef with all required attributes.
		/// </summary>
		public IfcCircleHollowProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure radius,IfcPositiveLengthMeasure wallThickness):base(profileType,radius)
		{

			WallThickness = wallThickness;

		}
		/// <summary>
		/// Construct a IfcCircleHollowProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCircleHollowProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure radius,IfcPositiveLengthMeasure wallThickness):base(profileType,profileName,position,radius)
		{

			WallThickness = wallThickness;

		}
		public static new IfcCircleHollowProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCircleHollowProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");
			parameters.Add(WallThickness != null ? WallThickness.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
