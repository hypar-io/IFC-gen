	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcheatfluxdensitymeasure.htm
	/// </summary>
	public class IfcHeatFluxDensityMeasure : BaseIfc
	{
		internal double value;

		public IfcHeatFluxDensityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcHeatFluxDensityMeasure v){ return v.value; }
		public static implicit operator IfcHeatFluxDensityMeasure(double v){ return new IfcHeatFluxDensityMeasure(v); }	
		public static IfcHeatFluxDensityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcHeatFluxDensityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
