	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermalexpansioncoefficientmeasure.htm
	/// </summary>
	public class IfcThermalExpansionCoefficientMeasure : BaseIfc
	{
		internal double value;

		public IfcThermalExpansionCoefficientMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcThermalExpansionCoefficientMeasure v){ return v.value; }
		public static implicit operator IfcThermalExpansionCoefficientMeasure(double v){ return new IfcThermalExpansionCoefficientMeasure(v); }	
		public static IfcThermalExpansionCoefficientMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcThermalExpansionCoefficientMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
