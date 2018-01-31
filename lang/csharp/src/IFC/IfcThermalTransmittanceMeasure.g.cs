	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermaltransmittancemeasure.htm
	/// </summary>
	public class IfcThermalTransmittanceMeasure : BaseIfc
	{
		internal double value;

		public IfcThermalTransmittanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcThermalTransmittanceMeasure v){ return v.value; }
		public static implicit operator IfcThermalTransmittanceMeasure(double v){ return new IfcThermalTransmittanceMeasure(v); }	
		public static IfcThermalTransmittanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcThermalTransmittanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
