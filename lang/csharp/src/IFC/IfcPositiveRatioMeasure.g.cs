	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveratiomeasure.htm
	/// </summary>
	public class IfcPositiveRatioMeasure : BaseIfc
	{
		internal IfcRatioMeasure value;

		public IfcPositiveRatioMeasure(IfcRatioMeasure value){ this.value = value; }	
		public static implicit operator IfcRatioMeasure(IfcPositiveRatioMeasure v){ return v.value; }
		public static implicit operator IfcPositiveRatioMeasure(IfcRatioMeasure v){ return new IfcPositiveRatioMeasure(v); }	
		public static IfcPositiveRatioMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPositiveRatioMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
