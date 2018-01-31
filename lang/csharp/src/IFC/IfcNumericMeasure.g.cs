	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnumericmeasure.htm
	/// </summary>
	public class IfcNumericMeasure : BaseIfc
	{
		internal double value;

		public IfcNumericMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcNumericMeasure v){ return v.value; }
		public static implicit operator IfcNumericMeasure(double v){ return new IfcNumericMeasure(v); }	
		public static IfcNumericMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcNumericMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
