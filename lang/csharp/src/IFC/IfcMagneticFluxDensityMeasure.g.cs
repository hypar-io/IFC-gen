	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmagneticfluxdensitymeasure.htm
	/// </summary>
	public class IfcMagneticFluxDensityMeasure : BaseIfc
	{
		internal double value;

		public IfcMagneticFluxDensityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMagneticFluxDensityMeasure v){ return v.value; }
		public static implicit operator IfcMagneticFluxDensityMeasure(double v){ return new IfcMagneticFluxDensityMeasure(v); }	
		public static IfcMagneticFluxDensityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMagneticFluxDensityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
