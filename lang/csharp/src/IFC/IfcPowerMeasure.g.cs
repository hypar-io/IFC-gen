	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpowermeasure.htm
	/// </summary>
	public class IfcPowerMeasure : BaseIfc
	{
		internal double value;

		public IfcPowerMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcPowerMeasure v){ return v.value; }
		public static implicit operator IfcPowerMeasure(double v){ return new IfcPowerMeasure(v); }	
		public static IfcPowerMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPowerMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
