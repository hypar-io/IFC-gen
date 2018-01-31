	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentmeasure.htm
	/// </summary>
	public class IfcContextDependentMeasure : BaseIfc
	{
		internal double value;

		public IfcContextDependentMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcContextDependentMeasure v){ return v.value; }
		public static implicit operator IfcContextDependentMeasure(double v){ return new IfcContextDependentMeasure(v); }	
		public static IfcContextDependentMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcContextDependentMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
