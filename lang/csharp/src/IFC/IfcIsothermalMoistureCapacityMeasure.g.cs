	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcisothermalmoisturecapacitymeasure.htm
	/// </summary>
	public class IfcIsothermalMoistureCapacityMeasure : BaseIfc
	{
		internal double value;

		public IfcIsothermalMoistureCapacityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcIsothermalMoistureCapacityMeasure v){ return v.value; }
		public static implicit operator IfcIsothermalMoistureCapacityMeasure(double v){ return new IfcIsothermalMoistureCapacityMeasure(v); }	
		public static IfcIsothermalMoistureCapacityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIsothermalMoistureCapacityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
