

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementquantity.htm"/>
	/// </summary>
	public  partial class IfcElementQuantity : IfcQuantitySet
	{
		public IfcLabel MethodOfMeasurement{get;set;} // optional
		public List<IfcPhysicalQuantity> Quantities{get;set;} 


		/// <summary>
		/// Construct a IfcElementQuantity with all required attributes.
		/// </summary>
		public IfcElementQuantity(IfcGloballyUniqueId globalId,List<IfcPhysicalQuantity> quantities):base(globalId)
		{

			Quantities = quantities;

		}
		/// <summary>
		/// Construct a IfcElementQuantity with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElementQuantity(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel methodOfMeasurement,List<IfcPhysicalQuantity> quantities):base(globalId,ownerHistory,name,description)
		{

			MethodOfMeasurement = methodOfMeasurement;
			Quantities = quantities;

		}
		public static new IfcElementQuantity FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElementQuantity>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(MethodOfMeasurement != null ? MethodOfMeasurement.ToStepValue() : "$");
			parameters.Add(Quantities != null ? Quantities.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
