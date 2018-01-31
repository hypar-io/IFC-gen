	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricresistancemeasure.htm
	/// </summary>
	public class IfcElectricResistanceMeasure : BaseIfc
	{
		internal double value;

		public IfcElectricResistanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcElectricResistanceMeasure v){ return v.value; }
		public static implicit operator IfcElectricResistanceMeasure(double v){ return new IfcElectricResistanceMeasure(v); }	
		public static IfcElectricResistanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElectricResistanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
