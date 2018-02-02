	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclinearvelocitymeasure.htm
	/// </summary>
	public class IfcLinearVelocityMeasure : BaseIfc
	{
		internal double value;

		public IfcLinearVelocityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLinearVelocityMeasure v){ return v.value; }
		public static implicit operator IfcLinearVelocityMeasure(double v){ return new IfcLinearVelocityMeasure(v); }	
		public static IfcLinearVelocityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLinearVelocityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
