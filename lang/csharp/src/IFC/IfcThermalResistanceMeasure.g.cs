	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermalresistancemeasure.htm
	/// </summary>
	public class IfcThermalResistanceMeasure : BaseIfc
	{
		internal double value;

		public IfcThermalResistanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcThermalResistanceMeasure v){ return v.value; }
		public static implicit operator IfcThermalResistanceMeasure(double v){ return new IfcThermalResistanceMeasure(v); }	
		public static IfcThermalResistanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcThermalResistanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
