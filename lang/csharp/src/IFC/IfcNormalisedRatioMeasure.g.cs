	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnormalisedratiomeasure.htm
	/// </summary>
	public class IfcNormalisedRatioMeasure : BaseIfc
	{
		internal IfcRatioMeasure value;

		public IfcNormalisedRatioMeasure(IfcRatioMeasure value){ this.value = value; }	
		public static implicit operator IfcRatioMeasure(IfcNormalisedRatioMeasure v){ return v.value; }
		public static implicit operator IfcNormalisedRatioMeasure(IfcRatioMeasure v){ return new IfcNormalisedRatioMeasure(v); }	
		public static IfcNormalisedRatioMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcNormalisedRatioMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
