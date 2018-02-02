

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanresult.htm"/>
	/// </summary>
	public  partial class IfcBooleanResult : IfcGeometricRepresentationItem
	{
		public IfcBooleanOperator Operator{get;set;} 
		public IfcBooleanOperand FirstOperand{get;set;} 
		public IfcBooleanOperand SecondOperand{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcBooleanResult with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBooleanResult(IfcBooleanOperator op,IfcBooleanOperand firstOperand,IfcBooleanOperand secondOperand):base()
		{

			Operator = op;
			FirstOperand = firstOperand;
			SecondOperand = secondOperand;

		}
		public static new IfcBooleanResult FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBooleanResult>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Operator != null ? Operator.ToStepValue() : "$");
			parameters.Add(FirstOperand != null ? FirstOperand.ToStepValue() : "$");
			parameters.Add(SecondOperand != null ? SecondOperand.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
