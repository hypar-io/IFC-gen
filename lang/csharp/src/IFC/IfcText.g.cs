	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctext.htm
	/// </summary>
	public class IfcText : BaseIfc
	{
		internal string value;

		public IfcText(string value){ this.value = value; }	
		public static implicit operator string(IfcText v){ return v.value; }
		public static implicit operator IfcText(string v){ return new IfcText(v); }	
		public static IfcText FromJSON(string json){ return JsonConvert.DeserializeObject<IfcText>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
