

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityarea.htm"/>
	/// </summary>
	public  partial class IfcQuantityArea : IfcPhysicalSimpleQuantity
	{
		public IfcAreaMeasure AreaValue{get;set;} 
		public IfcLabel Formula{get;set;} // optional


		/// <summary>
		/// Construct a IfcQuantityArea with all required attributes.
		/// </summary>
		public IfcQuantityArea(IfcLabel name,IfcAreaMeasure areaValue):base(name)
		{

			AreaValue = areaValue;

		}
		/// <summary>
		/// Construct a IfcQuantityArea with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcQuantityArea(IfcLabel name,IfcText description,IfcNamedUnit unit,IfcAreaMeasure areaValue,IfcLabel formula):base(name,description,unit)
		{

			AreaValue = areaValue;
			Formula = formula;

		}
		public static new IfcQuantityArea FromJSON(string json){ return JsonConvert.DeserializeObject<IfcQuantityArea>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(AreaValue != null ? AreaValue.ToStepValue() : "$");
			parameters.Add(Formula != null ? Formula.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
