	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcratiomeasure.htm
	/// </summary>
	public class IfcRatioMeasure : BaseIfc
	{
		internal double value;

		public IfcRatioMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcRatioMeasure v){ return v.value; }
		public static implicit operator IfcRatioMeasure(double v){ return new IfcRatioMeasure(v); }	
		public static IfcRatioMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRatioMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
