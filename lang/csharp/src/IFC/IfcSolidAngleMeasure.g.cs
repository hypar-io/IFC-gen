	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsolidanglemeasure.htm
	/// </summary>
	public class IfcSolidAngleMeasure : BaseIfc
	{
		internal double value;

		public IfcSolidAngleMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSolidAngleMeasure v){ return v.value; }
		public static implicit operator IfcSolidAngleMeasure(double v){ return new IfcSolidAngleMeasure(v); }	
		public static IfcSolidAngleMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSolidAngleMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
