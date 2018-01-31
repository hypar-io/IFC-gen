

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitycount.htm"/>
	/// </summary>
	public  partial class IfcQuantityCount : IfcPhysicalSimpleQuantity
	{
		public IfcCountMeasure CountValue{get;set;} 
		public IfcLabel Formula{get;set;} // optional


		/// <summary>
		/// Construct a IfcQuantityCount with all required attributes.
		/// </summary>
		public IfcQuantityCount(IfcLabel name,IfcCountMeasure countValue):base(name)
		{

			CountValue = countValue;

		}
		/// <summary>
		/// Construct a IfcQuantityCount with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcQuantityCount(IfcLabel name,IfcText description,IfcNamedUnit unit,IfcCountMeasure countValue,IfcLabel formula):base(name,description,unit)
		{

			CountValue = countValue;
			Formula = formula;

		}
		public static new IfcQuantityCount FromJSON(string json){ return JsonConvert.DeserializeObject<IfcQuantityCount>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(CountValue != null ? CountValue.ToStepValue() : "$");
			parameters.Add(Formula != null ? Formula.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
