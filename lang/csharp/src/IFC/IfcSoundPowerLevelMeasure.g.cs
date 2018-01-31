	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundpowerlevelmeasure.htm
	/// </summary>
	public class IfcSoundPowerLevelMeasure : BaseIfc
	{
		internal double value;

		public IfcSoundPowerLevelMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSoundPowerLevelMeasure v){ return v.value; }
		public static implicit operator IfcSoundPowerLevelMeasure(double v){ return new IfcSoundPowerLevelMeasure(v); }	
		public static IfcSoundPowerLevelMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSoundPowerLevelMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
