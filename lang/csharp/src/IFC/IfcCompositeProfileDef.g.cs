

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositeprofiledef.htm"/>
	/// </summary>
	public  partial class IfcCompositeProfileDef : IfcProfileDef
	{
		public List<IfcProfileDef> Profiles{get;set;} 
		public IfcLabel Label{get;set;} // optional


		/// <summary>
		/// Construct a IfcCompositeProfileDef with all required attributes.
		/// </summary>
		public IfcCompositeProfileDef(IfcProfileTypeEnum profileType,List<IfcProfileDef> profiles):base(profileType)
		{

			Profiles = profiles;

		}
		/// <summary>
		/// Construct a IfcCompositeProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCompositeProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,List<IfcProfileDef> profiles,IfcLabel label):base(profileType,profileName)
		{

			Profiles = profiles;
			Label = label;

		}
		public static new IfcCompositeProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCompositeProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Profiles != null ? Profiles.ToStepValue() : "$");
			parameters.Add(Label != null ? Label.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
