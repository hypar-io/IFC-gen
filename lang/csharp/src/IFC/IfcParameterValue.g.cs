	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcparametervalue.htm
	/// </summary>
	public class IfcParameterValue : BaseIfc
	{
		internal double value;

		public IfcParameterValue(double value){ this.value = value; }	
		public static implicit operator double(IfcParameterValue v){ return v.value; }
		public static implicit operator IfcParameterValue(double v){ return new IfcParameterValue(v); }	
		public static IfcParameterValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcParameterValue>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
