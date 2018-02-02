	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclengthmeasure.htm
	/// </summary>
	public class IfcLengthMeasure : BaseIfc
	{
		internal double value;

		public IfcLengthMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLengthMeasure v){ return v.value; }
		public static implicit operator IfcLengthMeasure(double v){ return new IfcLengthMeasure(v); }	
		public static IfcLengthMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLengthMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
