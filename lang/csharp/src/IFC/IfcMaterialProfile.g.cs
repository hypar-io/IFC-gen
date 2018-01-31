

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofile.htm"/>
	/// </summary>
	public  partial class IfcMaterialProfile : IfcMaterialDefinition
	{
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcMaterial Material{get;set;} // optional
		public IfcProfileDef Profile{get;set;} 
		public IfcInteger Priority{get;set;} // optional
		public IfcLabel Category{get;set;} // optional
		public IfcMaterialProfileSet ToMaterialProfileSet{get;set;} // inverse


		/// <summary>
		/// Construct a IfcMaterialProfile with all required attributes.
		/// </summary>
		public IfcMaterialProfile(IfcProfileDef profile):base()
		{

			Profile = profile;

		}
		/// <summary>
		/// Construct a IfcMaterialProfile with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialProfile(IfcLabel name,IfcText description,IfcMaterial material,IfcProfileDef profile,IfcInteger priority,IfcLabel category):base()
		{

			Name = name;
			Description = description;
			Material = material;
			Profile = profile;
			Priority = priority;
			Category = category;

		}
		public static new IfcMaterialProfile FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialProfile>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Material != null ? Material.ToStepValue() : "$");
			parameters.Add(Profile != null ? Profile.ToStepValue() : "$");
			parameters.Add(Priority != null ? Priority.ToStepValue() : "$");
			parameters.Add(Category != null ? Category.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
