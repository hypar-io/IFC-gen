	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompoundplaneanglemeasure.htm
	/// </summary>
	public class IfcCompoundPlaneAngleMeasure : BaseIfc
	{
		internal List<int> value;

		public IfcCompoundPlaneAngleMeasure(List<int> value){ this.value = value; }	
		public static implicit operator List<int>(IfcCompoundPlaneAngleMeasure v){ return v.value; }
		public static implicit operator IfcCompoundPlaneAngleMeasure(List<int> v){ return new IfcCompoundPlaneAngleMeasure(v); }	
		public static IfcCompoundPlaneAngleMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCompoundPlaneAngleMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
