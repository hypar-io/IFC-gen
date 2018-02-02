

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostvalue.htm"/>
	/// </summary>
	public  partial class IfcCostValue : IfcAppliedValue
	{


		/// <summary>
		/// Construct a IfcCostValue with all required attributes.
		/// </summary>
		public IfcCostValue():base()
		{


		}
		/// <summary>
		/// Construct a IfcCostValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCostValue(IfcLabel name,IfcText description,IfcAppliedValueSelect appliedValue,IfcMeasureWithUnit unitBasis,IfcDate applicableDate,IfcDate fixedUntilDate,IfcLabel category,IfcLabel condition,IfcArithmeticOperatorEnum arithmeticOperator,List<IfcAppliedValue> components):base(name,description,appliedValue,unitBasis,applicableDate,fixedUntilDate,category,condition,arithmeticOperator,components)
		{


		}
		public static new IfcCostValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCostValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(AppliedValue != null ? AppliedValue.ToStepValue() : "$");
			parameters.Add(UnitBasis != null ? UnitBasis.ToStepValue() : "$");
			parameters.Add(ApplicableDate != null ? ApplicableDate.ToStepValue() : "$");
			parameters.Add(FixedUntilDate != null ? FixedUntilDate.ToStepValue() : "$");
			parameters.Add(Category != null ? Category.ToStepValue() : "$");
			parameters.Add(Condition != null ? Condition.ToStepValue() : "$");
			parameters.Add(ArithmeticOperator.ToStepValue());
			parameters.Add(Components != null ? Components.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
