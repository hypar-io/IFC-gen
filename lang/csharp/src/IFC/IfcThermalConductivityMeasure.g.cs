	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermalconductivitymeasure.htm
	/// </summary>
	public class IfcThermalConductivityMeasure : BaseIfc
	{
		internal double value;

		public IfcThermalConductivityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcThermalConductivityMeasure v){ return v.value; }
		public static implicit operator IfcThermalConductivityMeasure(double v){ return new IfcThermalConductivityMeasure(v); }	
		public static IfcThermalConductivityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcThermalConductivityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
