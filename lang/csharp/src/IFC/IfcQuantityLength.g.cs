

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitylength.htm"/>
	/// </summary>
	public  partial class IfcQuantityLength : IfcPhysicalSimpleQuantity
	{
		public IfcLengthMeasure LengthValue{get;set;} 
		public IfcLabel Formula{get;set;} // optional


		/// <summary>
		/// Construct a IfcQuantityLength with all required attributes.
		/// </summary>
		public IfcQuantityLength(IfcLabel name,IfcLengthMeasure lengthValue):base(name)
		{

			LengthValue = lengthValue;

		}
		/// <summary>
		/// Construct a IfcQuantityLength with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcQuantityLength(IfcLabel name,IfcText description,IfcNamedUnit unit,IfcLengthMeasure lengthValue,IfcLabel formula):base(name,description,unit)
		{

			LengthValue = lengthValue;
			Formula = formula;

		}
		public static new IfcQuantityLength FromJSON(string json){ return JsonConvert.DeserializeObject<IfcQuantityLength>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(LengthValue != null ? LengthValue.ToStepValue() : "$");
			parameters.Add(Formula != null ? Formula.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
