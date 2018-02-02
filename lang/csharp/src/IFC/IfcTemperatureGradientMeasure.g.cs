	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctemperaturegradientmeasure.htm
	/// </summary>
	public class IfcTemperatureGradientMeasure : BaseIfc
	{
		internal double value;

		public IfcTemperatureGradientMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcTemperatureGradientMeasure v){ return v.value; }
		public static implicit operator IfcTemperatureGradientMeasure(double v){ return new IfcTemperatureGradientMeasure(v); }	
		public static IfcTemperatureGradientMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTemperatureGradientMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
