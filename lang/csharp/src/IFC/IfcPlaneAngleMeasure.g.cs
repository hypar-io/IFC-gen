	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplaneanglemeasure.htm
	/// </summary>
	public class IfcPlaneAngleMeasure : BaseIfc
	{
		internal double value;

		public IfcPlaneAngleMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcPlaneAngleMeasure v){ return v.value; }
		public static implicit operator IfcPlaneAngleMeasure(double v){ return new IfcPlaneAngleMeasure(v); }	
		public static IfcPlaneAngleMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPlaneAngleMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
