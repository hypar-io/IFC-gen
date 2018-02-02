	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectriccapacitancemeasure.htm
	/// </summary>
	public class IfcElectricCapacitanceMeasure : BaseIfc
	{
		internal double value;

		public IfcElectricCapacitanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcElectricCapacitanceMeasure v){ return v.value; }
		public static implicit operator IfcElectricCapacitanceMeasure(double v){ return new IfcElectricCapacitanceMeasure(v); }	
		public static IfcElectricCapacitanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElectricCapacitanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
