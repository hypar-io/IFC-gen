	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarforcemeasure.htm
	/// </summary>
	public class IfcPlanarForceMeasure : BaseIfc
	{
		internal double value;

		public IfcPlanarForceMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcPlanarForceMeasure v){ return v.value; }
		public static implicit operator IfcPlanarForceMeasure(double v){ return new IfcPlanarForceMeasure(v); }	
		public static IfcPlanarForceMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPlanarForceMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
