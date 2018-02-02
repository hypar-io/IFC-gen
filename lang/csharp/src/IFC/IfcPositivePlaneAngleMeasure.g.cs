	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveplaneanglemeasure.htm
	/// </summary>
	public class IfcPositivePlaneAngleMeasure : BaseIfc
	{
		internal IfcPlaneAngleMeasure value;

		public IfcPositivePlaneAngleMeasure(IfcPlaneAngleMeasure value){ this.value = value; }	
		public static implicit operator IfcPlaneAngleMeasure(IfcPositivePlaneAngleMeasure v){ return v.value; }
		public static implicit operator IfcPositivePlaneAngleMeasure(IfcPlaneAngleMeasure v){ return new IfcPositivePlaneAngleMeasure(v); }	
		public static IfcPositivePlaneAngleMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPositivePlaneAngleMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
