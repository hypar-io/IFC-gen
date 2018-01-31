	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveinteger.htm
	/// </summary>
	public class IfcPositiveInteger : BaseIfc
	{
		internal IfcInteger value;

		public IfcPositiveInteger(IfcInteger value){ this.value = value; }	
		public static implicit operator IfcInteger(IfcPositiveInteger v){ return v.value; }
		public static implicit operator IfcPositiveInteger(IfcInteger v){ return new IfcPositiveInteger(v); }	
		public static IfcPositiveInteger FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPositiveInteger>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
