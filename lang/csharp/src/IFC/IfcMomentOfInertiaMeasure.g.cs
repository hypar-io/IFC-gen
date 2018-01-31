	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmomentofinertiameasure.htm
	/// </summary>
	public class IfcMomentOfInertiaMeasure : BaseIfc
	{
		internal double value;

		public IfcMomentOfInertiaMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMomentOfInertiaMeasure v){ return v.value; }
		public static implicit operator IfcMomentOfInertiaMeasure(double v){ return new IfcMomentOfInertiaMeasure(v); }	
		public static IfcMomentOfInertiaMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMomentOfInertiaMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
