	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrotationalfrequencymeasure.htm
	/// </summary>
	public class IfcRotationalFrequencyMeasure : BaseIfc
	{
		internal double value;

		public IfcRotationalFrequencyMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcRotationalFrequencyMeasure v){ return v.value; }
		public static implicit operator IfcRotationalFrequencyMeasure(double v){ return new IfcRotationalFrequencyMeasure(v); }	
		public static IfcRotationalFrequencyMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRotationalFrequencyMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
