	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpressuremeasure.htm
	/// </summary>
	public class IfcPressureMeasure : BaseIfc
	{
		internal double value;

		public IfcPressureMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcPressureMeasure v){ return v.value; }
		public static implicit operator IfcPressureMeasure(double v){ return new IfcPressureMeasure(v); }	
		public static IfcPressureMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPressureMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
