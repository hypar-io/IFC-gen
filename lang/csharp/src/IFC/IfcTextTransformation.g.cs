	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexttransformation.htm
	/// </summary>
	public class IfcTextTransformation : BaseIfc
	{
		internal string value;

		public IfcTextTransformation(string value){ this.value = value; }	
		public static implicit operator string(IfcTextTransformation v){ return v.value; }
		public static implicit operator IfcTextTransformation(string v){ return new IfcTextTransformation(v); }	
		public static IfcTextTransformation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextTransformation>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
