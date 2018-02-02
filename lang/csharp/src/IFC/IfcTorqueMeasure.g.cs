	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctorquemeasure.htm
	/// </summary>
	public class IfcTorqueMeasure : BaseIfc
	{
		internal double value;

		public IfcTorqueMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcTorqueMeasure v){ return v.value; }
		public static implicit operator IfcTorqueMeasure(double v){ return new IfcTorqueMeasure(v); }	
		public static IfcTorqueMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTorqueMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
