

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityweight.htm"/>
	/// </summary>
	public  partial class IfcQuantityWeight : IfcPhysicalSimpleQuantity
	{
		public IfcMassMeasure WeightValue{get;set;} 
		public IfcLabel Formula{get;set;} // optional


		/// <summary>
		/// Construct a IfcQuantityWeight with all required attributes.
		/// </summary>
		public IfcQuantityWeight(IfcLabel name,IfcMassMeasure weightValue):base(name)
		{

			WeightValue = weightValue;

		}
		/// <summary>
		/// Construct a IfcQuantityWeight with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcQuantityWeight(IfcLabel name,IfcText description,IfcNamedUnit unit,IfcMassMeasure weightValue,IfcLabel formula):base(name,description,unit)
		{

			WeightValue = weightValue;
			Formula = formula;

		}
		public static new IfcQuantityWeight FromJSON(string json){ return JsonConvert.DeserializeObject<IfcQuantityWeight>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(WeightValue != null ? WeightValue.ToStepValue() : "$");
			parameters.Add(Formula != null ? Formula.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
