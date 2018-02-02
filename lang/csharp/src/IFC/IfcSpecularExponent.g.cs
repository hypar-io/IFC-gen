	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspecularexponent.htm
	/// </summary>
	public class IfcSpecularExponent : BaseIfc
	{
		internal double value;

		public IfcSpecularExponent(double value){ this.value = value; }	
		public static implicit operator double(IfcSpecularExponent v){ return v.value; }
		public static implicit operator IfcSpecularExponent(double v){ return new IfcSpecularExponent(v); }	
		public static IfcSpecularExponent FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpecularExponent>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
