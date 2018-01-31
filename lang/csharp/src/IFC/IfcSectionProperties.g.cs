

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionproperties.htm"/>
	/// </summary>
	public  partial class IfcSectionProperties : IfcPreDefinedProperties
	{
		public IfcSectionTypeEnum SectionType{get;set;} 
		public IfcProfileDef StartProfile{get;set;} 
		public IfcProfileDef EndProfile{get;set;} // optional


		/// <summary>
		/// Construct a IfcSectionProperties with all required attributes.
		/// </summary>
		public IfcSectionProperties(IfcSectionTypeEnum sectionType,IfcProfileDef startProfile):base()
		{

			SectionType = sectionType;
			StartProfile = startProfile;

		}
		/// <summary>
		/// Construct a IfcSectionProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSectionProperties(IfcSectionTypeEnum sectionType,IfcProfileDef startProfile,IfcProfileDef endProfile):base()
		{

			SectionType = sectionType;
			StartProfile = startProfile;
			EndProfile = endProfile;

		}
		public static new IfcSectionProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSectionProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SectionType.ToStepValue());
			parameters.Add(StartProfile != null ? StartProfile.ToStepValue() : "$");
			parameters.Add(EndProfile != null ? EndProfile.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
