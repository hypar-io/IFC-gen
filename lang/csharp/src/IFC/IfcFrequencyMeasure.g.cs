	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfrequencymeasure.htm
	/// </summary>
	public class IfcFrequencyMeasure : BaseIfc
	{
		internal double value;

		public IfcFrequencyMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcFrequencyMeasure v){ return v.value; }
		public static implicit operator IfcFrequencyMeasure(double v){ return new IfcFrequencyMeasure(v); }	
		public static IfcFrequencyMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFrequencyMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
