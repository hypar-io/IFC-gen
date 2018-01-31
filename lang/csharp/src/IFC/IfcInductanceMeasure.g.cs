	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinductancemeasure.htm
	/// </summary>
	public class IfcInductanceMeasure : BaseIfc
	{
		internal double value;

		public IfcInductanceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcInductanceMeasure v){ return v.value; }
		public static implicit operator IfcInductanceMeasure(double v){ return new IfcInductanceMeasure(v); }	
		public static IfcInductanceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcInductanceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
