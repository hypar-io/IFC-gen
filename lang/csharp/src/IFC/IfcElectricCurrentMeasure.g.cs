	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectriccurrentmeasure.htm
	/// </summary>
	public class IfcElectricCurrentMeasure : BaseIfc
	{
		internal double value;

		public IfcElectricCurrentMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcElectricCurrentMeasure v){ return v.value; }
		public static implicit operator IfcElectricCurrentMeasure(double v){ return new IfcElectricCurrentMeasure(v); }	
		public static IfcElectricCurrentMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElectricCurrentMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
