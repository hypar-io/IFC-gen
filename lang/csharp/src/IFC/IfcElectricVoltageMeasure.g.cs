	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricvoltagemeasure.htm
	/// </summary>
	public class IfcElectricVoltageMeasure : BaseIfc
	{
		internal double value;

		public IfcElectricVoltageMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcElectricVoltageMeasure v){ return v.value; }
		public static implicit operator IfcElectricVoltageMeasure(double v){ return new IfcElectricVoltageMeasure(v); }	
		public static IfcElectricVoltageMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElectricVoltageMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
