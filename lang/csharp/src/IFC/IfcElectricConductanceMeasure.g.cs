	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricconductancemeasure.htm
	/// </summary>
	public class IfcElectricConductanceMeasure : BaseIfc
	{
		internal double value;

		public IfcElectricConductanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcElectricConductanceMeasure v){ return v.value; }
		public static implicit operator IfcElectricConductanceMeasure(double v){ return new IfcElectricConductanceMeasure(v); }	
		public static IfcElectricConductanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElectricConductanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
