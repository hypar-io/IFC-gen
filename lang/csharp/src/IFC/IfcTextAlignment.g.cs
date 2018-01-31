	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextalignment.htm
	/// </summary>
	public class IfcTextAlignment : BaseIfc
	{
		internal string value;

		public IfcTextAlignment(string value){ this.value = value; }	
		public static implicit operator string(IfcTextAlignment v){ return v.value; }
		public static implicit operator IfcTextAlignment(string v){ return new IfcTextAlignment(v); }	
		public static IfcTextAlignment FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextAlignment>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
