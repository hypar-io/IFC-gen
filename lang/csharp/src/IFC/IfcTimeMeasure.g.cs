	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimemeasure.htm
	/// </summary>
	public class IfcTimeMeasure : BaseIfc
	{
		internal double value;

		public IfcTimeMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcTimeMeasure v){ return v.value; }
		public static implicit operator IfcTimeMeasure(double v){ return new IfcTimeMeasure(v); }	
		public static IfcTimeMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTimeMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
