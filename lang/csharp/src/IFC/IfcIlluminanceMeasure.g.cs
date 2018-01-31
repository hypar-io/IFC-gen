	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcilluminancemeasure.htm
	/// </summary>
	public class IfcIlluminanceMeasure : BaseIfc
	{
		internal double value;

		public IfcIlluminanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcIlluminanceMeasure v){ return v.value; }
		public static implicit operator IfcIlluminanceMeasure(double v){ return new IfcIlluminanceMeasure(v); }	
		public static IfcIlluminanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIlluminanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
