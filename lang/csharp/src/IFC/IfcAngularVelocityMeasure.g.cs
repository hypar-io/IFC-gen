	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcangularvelocitymeasure.htm
	/// </summary>
	public class IfcAngularVelocityMeasure : BaseIfc
	{
		internal double value;

		public IfcAngularVelocityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcAngularVelocityMeasure v){ return v.value; }
		public static implicit operator IfcAngularVelocityMeasure(double v){ return new IfcAngularVelocityMeasure(v); }	
		public static IfcAngularVelocityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAngularVelocityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
