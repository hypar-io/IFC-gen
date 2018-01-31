	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricchargemeasure.htm
	/// </summary>
	public class IfcElectricChargeMeasure : BaseIfc
	{
		internal double value;

		public IfcElectricChargeMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcElectricChargeMeasure v){ return v.value; }
		public static implicit operator IfcElectricChargeMeasure(double v){ return new IfcElectricChargeMeasure(v); }	
		public static IfcElectricChargeMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElectricChargeMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
