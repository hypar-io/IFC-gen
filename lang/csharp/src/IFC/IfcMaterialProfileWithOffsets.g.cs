

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilewithoffsets.htm"/>
	/// </summary>
	public  partial class IfcMaterialProfileWithOffsets : IfcMaterialProfile
	{
		public List<IfcLengthMeasure> OffsetValues{get;set;} 


		/// <summary>
		/// Construct a IfcMaterialProfileWithOffsets with all required attributes.
		/// </summary>
		public IfcMaterialProfileWithOffsets(IfcProfileDef profile,List<IfcLengthMeasure> offsetValues):base(profile)
		{

			OffsetValues = offsetValues;

		}
		/// <summary>
		/// Construct a IfcMaterialProfileWithOffsets with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialProfileWithOffsets(IfcLabel name,IfcText description,IfcMaterial material,IfcProfileDef profile,IfcInteger priority,IfcLabel category,List<IfcLengthMeasure> offsetValues):base(name,description,material,profile,priority,category)
		{

			OffsetValues = offsetValues;

		}
		public static new IfcMaterialProfileWithOffsets FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialProfileWithOffsets>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Material != null ? Material.ToStepValue() : "$");
			parameters.Add(Profile != null ? Profile.ToStepValue() : "$");
			parameters.Add(Priority != null ? Priority.ToStepValue() : "$");
			parameters.Add(Category != null ? Category.ToStepValue() : "$");
			parameters.Add(OffsetValues != null ? OffsetValues.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
