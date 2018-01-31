

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertytablevalue.htm"/>
	/// </summary>
	public  partial class IfcPropertyTableValue : IfcSimpleProperty
	{
		public List<IfcValue> DefiningValues{get;set;} // optional
		public List<IfcValue> DefinedValues{get;set;} // optional
		public IfcText Expression{get;set;} // optional
		public IfcUnit DefiningUnit{get;set;} // optional
		public IfcUnit DefinedUnit{get;set;} // optional
		public IfcCurveInterpolationEnum CurveInterpolation{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertyTableValue with all required attributes.
		/// </summary>
		public IfcPropertyTableValue(IfcIdentifier name):base(name)
		{
			DefiningValues = new List<IfcValue>();
			DefinedValues = new List<IfcValue>();


		}
		/// <summary>
		/// Construct a IfcPropertyTableValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyTableValue(IfcIdentifier name,IfcText description,List<IfcValue> definingValues,List<IfcValue> definedValues,IfcText expression,IfcUnit definingUnit,IfcUnit definedUnit,IfcCurveInterpolationEnum curveInterpolation):base(name,description)
		{

			DefiningValues = definingValues;
			DefinedValues = definedValues;
			Expression = expression;
			DefiningUnit = definingUnit;
			DefinedUnit = definedUnit;
			CurveInterpolation = curveInterpolation;

		}
		public static new IfcPropertyTableValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyTableValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(DefiningValues != null ? DefiningValues.ToStepValue() : "$");
			parameters.Add(DefinedValues != null ? DefinedValues.ToStepValue() : "$");
			parameters.Add(Expression != null ? Expression.ToStepValue() : "$");
			parameters.Add(DefiningUnit != null ? DefiningUnit.ToStepValue() : "$");
			parameters.Add(DefinedUnit != null ? DefinedUnit.ToStepValue() : "$");
			parameters.Add(CurveInterpolation.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
