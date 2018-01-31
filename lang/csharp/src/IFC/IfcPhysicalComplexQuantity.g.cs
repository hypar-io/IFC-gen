

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalcomplexquantity.htm"/>
	/// </summary>
	public  partial class IfcPhysicalComplexQuantity : IfcPhysicalQuantity
	{
		public List<IfcPhysicalQuantity> HasQuantities{get;set;} 
		public IfcLabel Discrimination{get;set;} 
		public IfcLabel Quality{get;set;} // optional
		public IfcLabel Usage{get;set;} // optional


		/// <summary>
		/// Construct a IfcPhysicalComplexQuantity with all required attributes.
		/// </summary>
		public IfcPhysicalComplexQuantity(IfcLabel name,List<IfcPhysicalQuantity> hasQuantities,IfcLabel discrimination):base(name)
		{

			HasQuantities = hasQuantities;
			Discrimination = discrimination;

		}
		/// <summary>
		/// Construct a IfcPhysicalComplexQuantity with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPhysicalComplexQuantity(IfcLabel name,IfcText description,List<IfcPhysicalQuantity> hasQuantities,IfcLabel discrimination,IfcLabel quality,IfcLabel usage):base(name,description)
		{

			HasQuantities = hasQuantities;
			Discrimination = discrimination;
			Quality = quality;
			Usage = usage;

		}
		public static new IfcPhysicalComplexQuantity FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPhysicalComplexQuantity>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(HasQuantities != null ? HasQuantities.ToStepValue() : "$");
			parameters.Add(Discrimination != null ? Discrimination.ToStepValue() : "$");
			parameters.Add(Quality != null ? Quality.ToStepValue() : "$");
			parameters.Add(Usage != null ? Usage.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
