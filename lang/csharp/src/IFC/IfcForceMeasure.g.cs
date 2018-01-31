	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcforcemeasure.htm
	/// </summary>
	public class IfcForceMeasure : BaseIfc
	{
		internal double value;

		public IfcForceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcForceMeasure v){ return v.value; }
		public static implicit operator IfcForceMeasure(double v){ return new IfcForceMeasure(v); }	
		public static IfcForceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcForceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
