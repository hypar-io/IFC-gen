	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaccelerationmeasure.htm
	/// </summary>
	public class IfcAccelerationMeasure : BaseIfc
	{
		internal double value;

		public IfcAccelerationMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcAccelerationMeasure v){ return v.value; }
		public static implicit operator IfcAccelerationMeasure(double v){ return new IfcAccelerationMeasure(v); }	
		public static IfcAccelerationMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAccelerationMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
