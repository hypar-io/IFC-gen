

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanclippingresult.htm"/>
	/// </summary>
	public  partial class IfcBooleanClippingResult : IfcBooleanResult
	{


		/// <summary>
		/// Construct a IfcBooleanClippingResult with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBooleanClippingResult(IfcBooleanOperator op,IfcBooleanOperand firstOperand,IfcBooleanOperand secondOperand):base(op,firstOperand,secondOperand)
		{


		}
		public static new IfcBooleanClippingResult FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBooleanClippingResult>(json); }

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
