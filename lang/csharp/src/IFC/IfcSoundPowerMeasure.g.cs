	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundpowermeasure.htm
	/// </summary>
	public class IfcSoundPowerMeasure : BaseIfc
	{
		internal double value;

		public IfcSoundPowerMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSoundPowerMeasure v){ return v.value; }
		public static implicit operator IfcSoundPowerMeasure(double v){ return new IfcSoundPowerMeasure(v); }	
		public static IfcSoundPowerMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSoundPowerMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
