	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermaladmittancemeasure.htm
	/// </summary>
	public class IfcThermalAdmittanceMeasure : BaseIfc
	{
		internal double value;

		public IfcThermalAdmittanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcThermalAdmittanceMeasure v){ return v.value; }
		public static implicit operator IfcThermalAdmittanceMeasure(double v){ return new IfcThermalAdmittanceMeasure(v); }	
		public static IfcThermalAdmittanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcThermalAdmittanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
