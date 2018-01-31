	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspecularroughness.htm
	/// </summary>
	public class IfcSpecularRoughness : BaseIfc
	{
		internal double value;

		public IfcSpecularRoughness(double value){ this.value = value; }	
		public static implicit operator double(IfcSpecularRoughness v){ return v.value; }
		public static implicit operator IfcSpecularRoughness(double v){ return new IfcSpecularRoughness(v); }	
		public static IfcSpecularRoughness FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpecularRoughness>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
