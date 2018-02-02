	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmassflowratemeasure.htm
	/// </summary>
	public class IfcMassFlowRateMeasure : BaseIfc
	{
		internal double value;

		public IfcMassFlowRateMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMassFlowRateMeasure v){ return v.value; }
		public static implicit operator IfcMassFlowRateMeasure(double v){ return new IfcMassFlowRateMeasure(v); }	
		public static IfcMassFlowRateMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMassFlowRateMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
