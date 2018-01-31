

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipseprofiledef.htm"/>
	/// </summary>
	public  partial class IfcEllipseProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure SemiAxis1{get;set;} 
		public IfcPositiveLengthMeasure SemiAxis2{get;set;} 


		/// <summary>
		/// Construct a IfcEllipseProfileDef with all required attributes.
		/// </summary>
		public IfcEllipseProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure semiAxis1,IfcPositiveLengthMeasure semiAxis2):base(profileType)
		{

			SemiAxis1 = semiAxis1;
			SemiAxis2 = semiAxis2;

		}
		/// <summary>
		/// Construct a IfcEllipseProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEllipseProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure semiAxis1,IfcPositiveLengthMeasure semiAxis2):base(profileType,profileName,position)
		{

			SemiAxis1 = semiAxis1;
			SemiAxis2 = semiAxis2;

		}
		public static new IfcEllipseProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEllipseProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(SemiAxis1 != null ? SemiAxis1.ToStepValue() : "$");
			parameters.Add(SemiAxis2 != null ? SemiAxis2.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
