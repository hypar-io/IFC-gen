	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctime.htm
	/// </summary>
	public class IfcTime : BaseIfc
	{
		internal string value;

		public IfcTime(string value){ this.value = value; }	
		public static implicit operator string(IfcTime v){ return v.value; }
		public static implicit operator IfcTime(string v){ return new IfcTime(v); }	
		public static IfcTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTime>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
