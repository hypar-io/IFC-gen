	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundpressuremeasure.htm
	/// </summary>
	public class IfcSoundPressureMeasure : BaseIfc
	{
		internal double value;

		public IfcSoundPressureMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSoundPressureMeasure v){ return v.value; }
		public static implicit operator IfcSoundPressureMeasure(double v){ return new IfcSoundPressureMeasure(v); }	
		public static IfcSoundPressureMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSoundPressureMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
