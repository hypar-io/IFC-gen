	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentabletext.htm
	/// </summary>
	public class IfcPresentableText : BaseIfc
	{
		internal string value;

		public IfcPresentableText(string value){ this.value = value; }	
		public static implicit operator string(IfcPresentableText v){ return v.value; }
		public static implicit operator IfcPresentableText(string v){ return new IfcPresentableText(v); }	
		public static IfcPresentableText FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPresentableText>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
