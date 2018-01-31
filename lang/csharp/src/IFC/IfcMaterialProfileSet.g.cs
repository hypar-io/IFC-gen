

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofileset.htm"/>
	/// </summary>
	public  partial class IfcMaterialProfileSet : IfcMaterialDefinition
	{
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public List<IfcMaterialProfile> MaterialProfiles{get;set;} 
		public IfcCompositeProfileDef CompositeProfile{get;set;} // optional


		/// <summary>
		/// Construct a IfcMaterialProfileSet with all required attributes.
		/// </summary>
		public IfcMaterialProfileSet(List<IfcMaterialProfile> materialProfiles):base()
		{

			MaterialProfiles = materialProfiles;

		}
		/// <summary>
		/// Construct a IfcMaterialProfileSet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialProfileSet(IfcLabel name,IfcText description,List<IfcMaterialProfile> materialProfiles,IfcCompositeProfileDef compositeProfile):base()
		{

			Name = name;
			Description = description;
			MaterialProfiles = materialProfiles;
			CompositeProfile = compositeProfile;

		}
		public static new IfcMaterialProfileSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialProfileSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(MaterialProfiles != null ? MaterialProfiles.ToStepValue() : "$");
			parameters.Add(CompositeProfile != null ? CompositeProfile.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
