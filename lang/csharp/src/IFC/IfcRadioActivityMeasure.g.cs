	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcradioactivitymeasure.htm
	/// </summary>
	public class IfcRadioActivityMeasure : BaseIfc
	{
		internal double value;

		public IfcRadioActivityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcRadioActivityMeasure v){ return v.value; }
		public static implicit operator IfcRadioActivityMeasure(double v){ return new IfcRadioActivityMeasure(v); }	
		public static IfcRadioActivityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRadioActivityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
