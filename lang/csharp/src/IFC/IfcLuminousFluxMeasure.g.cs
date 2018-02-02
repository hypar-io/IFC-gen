	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcluminousfluxmeasure.htm
	/// </summary>
	public class IfcLuminousFluxMeasure : BaseIfc
	{
		internal double value;

		public IfcLuminousFluxMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLuminousFluxMeasure v){ return v.value; }
		public static implicit operator IfcLuminousFluxMeasure(double v){ return new IfcLuminousFluxMeasure(v); }	
		public static IfcLuminousFluxMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLuminousFluxMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
