	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwarpingmomentmeasure.htm
	/// </summary>
	public class IfcWarpingMomentMeasure : BaseIfc
	{
		internal double value;

		public IfcWarpingMomentMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcWarpingMomentMeasure v){ return v.value; }
		public static implicit operator IfcWarpingMomentMeasure(double v){ return new IfcWarpingMomentMeasure(v); }	
		public static IfcWarpingMomentMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWarpingMomentMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
