

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedprofiledef.htm"/>
	/// </summary>
	public  partial class IfcDerivedProfileDef : IfcProfileDef
	{
		public IfcProfileDef ParentProfile{get;set;} 
		public IfcCartesianTransformationOperator2D Operator{get;set;} 
		public IfcLabel Label{get;set;} // optional


		/// <summary>
		/// Construct a IfcDerivedProfileDef with all required attributes.
		/// </summary>
		public IfcDerivedProfileDef(IfcProfileTypeEnum profileType,IfcProfileDef parentProfile,IfcCartesianTransformationOperator2D op):base(profileType)
		{

			ParentProfile = parentProfile;
			Operator = op;

		}
		/// <summary>
		/// Construct a IfcDerivedProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDerivedProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcProfileDef parentProfile,IfcCartesianTransformationOperator2D op,IfcLabel label):base(profileType,profileName)
		{

			ParentProfile = parentProfile;
			Operator = op;
			Label = label;

		}
		public static new IfcDerivedProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDerivedProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(ParentProfile != null ? ParentProfile.ToStepValue() : "$");
			parameters.Add(Operator != null ? Operator.ToStepValue() : "$");
			parameters.Add(Label != null ? Label.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
