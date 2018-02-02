	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcduration.htm
	/// </summary>
	public class IfcDuration : BaseIfc
	{
		internal string value;

		public IfcDuration(string value){ this.value = value; }	
		public static implicit operator string(IfcDuration v){ return v.value; }
		public static implicit operator IfcDuration(string v){ return new IfcDuration(v); }	
		public static IfcDuration FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDuration>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
