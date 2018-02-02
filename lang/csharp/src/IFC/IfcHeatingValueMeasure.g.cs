	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcheatingvaluemeasure.htm
	/// </summary>
	public class IfcHeatingValueMeasure : BaseIfc
	{
		internal double value;

		public IfcHeatingValueMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcHeatingValueMeasure v){ return v.value; }
		public static implicit operator IfcHeatingValueMeasure(double v){ return new IfcHeatingValueMeasure(v); }	
		public static IfcHeatingValueMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcHeatingValueMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
