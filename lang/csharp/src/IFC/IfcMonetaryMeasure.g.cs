	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonetarymeasure.htm
	/// </summary>
	public class IfcMonetaryMeasure : BaseIfc
	{
		internal double value;

		public IfcMonetaryMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMonetaryMeasure v){ return v.value; }
		public static implicit operator IfcMonetaryMeasure(double v){ return new IfcMonetaryMeasure(v); }	
		public static IfcMonetaryMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMonetaryMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
