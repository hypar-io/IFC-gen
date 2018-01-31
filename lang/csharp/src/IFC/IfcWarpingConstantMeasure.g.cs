	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwarpingconstantmeasure.htm
	/// </summary>
	public class IfcWarpingConstantMeasure : BaseIfc
	{
		internal double value;

		public IfcWarpingConstantMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcWarpingConstantMeasure v){ return v.value; }
		public static implicit operator IfcWarpingConstantMeasure(double v){ return new IfcWarpingConstantMeasure(v); }	
		public static IfcWarpingConstantMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWarpingConstantMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
