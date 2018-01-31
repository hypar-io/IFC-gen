

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccircleprofiledef.htm"/>
	/// </summary>
	public  partial class IfcCircleProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure Radius{get;set;} 


		/// <summary>
		/// Construct a IfcCircleProfileDef with all required attributes.
		/// </summary>
		public IfcCircleProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure radius):base(profileType)
		{

			Radius = radius;

		}
		/// <summary>
		/// Construct a IfcCircleProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCircleProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure radius):base(profileType,profileName,position)
		{

			Radius = radius;

		}
		public static new IfcCircleProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCircleProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
