

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmirroredprofiledef.htm"/>
	/// </summary>
	public  partial class IfcMirroredProfileDef : IfcDerivedProfileDef
	{

        [JsonIgnore]
        new public IfcCartesianTransformationOperator2D Operator{get{throw new NotImplementedException($"Derived property logic has been implemented for Operator.");}} // derived


		/// <summary>
		/// Construct a IfcMirroredProfileDef with all required attributes.
		/// </summary>
		public IfcMirroredProfileDef(IfcProfileTypeEnum profileType,IfcProfileDef parentProfile,IfcCartesianTransformationOperator2D op):base(profileType,parentProfile,op)
		{


		}
		/// <summary>
		/// Construct a IfcMirroredProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMirroredProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcProfileDef parentProfile,IfcCartesianTransformationOperator2D op,IfcLabel label):base(profileType,profileName,parentProfile,op,label)
		{


		}
		public static new IfcMirroredProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMirroredProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(ParentProfile != null ? ParentProfile.ToStepValue() : "$");
			parameters.Add("*");
			parameters.Add(Label != null ? Label.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
