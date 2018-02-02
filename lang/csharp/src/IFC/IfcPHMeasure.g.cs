	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphmeasure.htm
	/// </summary>
	public class IfcPHMeasure : BaseIfc
	{
		internal double value;

		public IfcPHMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcPHMeasure v){ return v.value; }
		public static implicit operator IfcPHMeasure(double v){ return new IfcPHMeasure(v); }	
		public static IfcPHMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPHMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
