	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspecificheatcapacitymeasure.htm
	/// </summary>
	public class IfcSpecificHeatCapacityMeasure : BaseIfc
	{
		internal double value;

		public IfcSpecificHeatCapacityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSpecificHeatCapacityMeasure v){ return v.value; }
		public static implicit operator IfcSpecificHeatCapacityMeasure(double v){ return new IfcSpecificHeatCapacityMeasure(v); }	
		public static IfcSpecificHeatCapacityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpecificHeatCapacityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
