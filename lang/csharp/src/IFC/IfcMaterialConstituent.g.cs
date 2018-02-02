

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialconstituent.htm"/>
	/// </summary>
	public  partial class IfcMaterialConstituent : IfcMaterialDefinition
	{
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcMaterial Material{get;set;} 
		public IfcNormalisedRatioMeasure Fraction{get;set;} // optional
		public IfcLabel Category{get;set;} // optional
		public IfcMaterialConstituentSet ToMaterialConstituentSet{get;set;} // inverse


		/// <summary>
		/// Construct a IfcMaterialConstituent with all required attributes.
		/// </summary>
		public IfcMaterialConstituent(IfcMaterial material):base()
		{

			Material = material;

		}
		/// <summary>
		/// Construct a IfcMaterialConstituent with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialConstituent(IfcLabel name,IfcText description,IfcMaterial material,IfcNormalisedRatioMeasure fraction,IfcLabel category):base()
		{

			Name = name;
			Description = description;
			Material = material;
			Fraction = fraction;
			Category = category;

		}
		public static new IfcMaterialConstituent FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialConstituent>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Material != null ? Material.ToStepValue() : "$");
			parameters.Add(Fraction != null ? Fraction.ToStepValue() : "$");
			parameters.Add(Category != null ? Category.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
