	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextdecoration.htm
	/// </summary>
	public class IfcTextDecoration : BaseIfc
	{
		internal string value;

		public IfcTextDecoration(string value){ this.value = value; }	
		public static implicit operator string(IfcTextDecoration v){ return v.value; }
		public static implicit operator IfcTextDecoration(string v){ return new IfcTextDecoration(v); }	
		public static IfcTextDecoration FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextDecoration>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
