	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclinearmomentmeasure.htm
	/// </summary>
	public class IfcLinearMomentMeasure : BaseIfc
	{
		internal double value;

		public IfcLinearMomentMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLinearMomentMeasure v){ return v.value; }
		public static implicit operator IfcLinearMomentMeasure(double v){ return new IfcLinearMomentMeasure(v); }	
		public static IfcLinearMomentMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLinearMomentMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
