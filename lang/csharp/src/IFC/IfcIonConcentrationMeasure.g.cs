	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcionconcentrationmeasure.htm
	/// </summary>
	public class IfcIonConcentrationMeasure : BaseIfc
	{
		internal double value;

		public IfcIonConcentrationMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcIonConcentrationMeasure v){ return v.value; }
		public static implicit operator IfcIonConcentrationMeasure(double v){ return new IfcIonConcentrationMeasure(v); }	
		public static IfcIonConcentrationMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIonConcentrationMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
