	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundpressurelevelmeasure.htm
	/// </summary>
	public class IfcSoundPressureLevelMeasure : BaseIfc
	{
		internal double value;

		public IfcSoundPressureLevelMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSoundPressureLevelMeasure v){ return v.value; }
		public static implicit operator IfcSoundPressureLevelMeasure(double v){ return new IfcSoundPressureLevelMeasure(v); }	
		public static IfcSoundPressureLevelMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSoundPressureLevelMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
