	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclinearforcemeasure.htm
	/// </summary>
	public class IfcLinearForceMeasure : BaseIfc
	{
		internal double value;

		public IfcLinearForceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLinearForceMeasure v){ return v.value; }
		public static implicit operator IfcLinearForceMeasure(double v){ return new IfcLinearForceMeasure(v); }	
		public static IfcLinearForceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLinearForceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
