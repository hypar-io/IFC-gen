	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnonnegativelengthmeasure.htm
	/// </summary>
	public class IfcNonNegativeLengthMeasure : BaseIfc
	{
		internal IfcLengthMeasure value;

		public IfcNonNegativeLengthMeasure(IfcLengthMeasure value){ this.value = value; }	
		public static implicit operator IfcLengthMeasure(IfcNonNegativeLengthMeasure v){ return v.value; }
		public static implicit operator IfcNonNegativeLengthMeasure(IfcLengthMeasure v){ return new IfcNonNegativeLengthMeasure(v); }	
		public static IfcNonNegativeLengthMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcNonNegativeLengthMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
