

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvalue.htm"/>
	/// </summary>
	public  partial class IfcAppliedValue : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcAppliedValueSelect AppliedValue{get;set;} // optional
		public IfcMeasureWithUnit UnitBasis{get;set;} // optional
		public IfcDate ApplicableDate{get;set;} // optional
		public IfcDate FixedUntilDate{get;set;} // optional
		public IfcLabel Category{get;set;} // optional
		public IfcLabel Condition{get;set;} // optional
		public IfcArithmeticOperatorEnum ArithmeticOperator{get;set;} // optional
		public List<IfcAppliedValue> Components{get;set;} // optional
		public List<IfcExternalReferenceRelationship> HasExternalReference{get;set;} // inverse


		/// <summary>
		/// Construct a IfcAppliedValue with all required attributes.
		/// </summary>
		public IfcAppliedValue():base()
		{
			Components = new List<IfcAppliedValue>();
			HasExternalReference = new List<IfcExternalReferenceRelationship>();


		}
		/// <summary>
		/// Construct a IfcAppliedValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAppliedValue(IfcLabel name,IfcText description,IfcAppliedValueSelect appliedValue,IfcMeasureWithUnit unitBasis,IfcDate applicableDate,IfcDate fixedUntilDate,IfcLabel category,IfcLabel condition,IfcArithmeticOperatorEnum arithmeticOperator,List<IfcAppliedValue> components):base()
		{
			HasExternalReference = new List<IfcExternalReferenceRelationship>();

			Name = name;
			Description = description;
			AppliedValue = appliedValue;
			UnitBasis = unitBasis;
			ApplicableDate = applicableDate;
			FixedUntilDate = fixedUntilDate;
			Category = category;
			Condition = condition;
			ArithmeticOperator = arithmeticOperator;
			Components = components;

		}
		public static  IfcAppliedValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAppliedValue>(json); }

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
