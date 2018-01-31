

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyboundedvalue.htm"/>
	/// </summary>
	public  partial class IfcPropertyBoundedValue : IfcSimpleProperty
	{
		public IfcValue UpperBoundValue{get;set;} // optional
		public IfcValue LowerBoundValue{get;set;} // optional
		public IfcUnit Unit{get;set;} // optional
		public IfcValue SetPointValue{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertyBoundedValue with all required attributes.
		/// </summary>
		public IfcPropertyBoundedValue(IfcIdentifier name):base(name)
		{


		}
		/// <summary>
		/// Construct a IfcPropertyBoundedValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyBoundedValue(IfcIdentifier name,IfcText description,IfcValue upperBoundValue,IfcValue lowerBoundValue,IfcUnit unit,IfcValue setPointValue):base(name,description)
		{

			UpperBoundValue = upperBoundValue;
			LowerBoundValue = lowerBoundValue;
			Unit = unit;
			SetPointValue = setPointValue;

		}
		public static new IfcPropertyBoundedValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyBoundedValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(UpperBoundValue != null ? UpperBoundValue.ToStepValue() : "$");
			parameters.Add(LowerBoundValue != null ? LowerBoundValue.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(SetPointValue != null ? SetPointValue.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
