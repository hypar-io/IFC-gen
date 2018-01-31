	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdate.htm
	/// </summary>
	public class IfcDate : BaseIfc
	{
		internal string value;

		public IfcDate(string value){ this.value = value; }	
		public static implicit operator string(IfcDate v){ return v.value; }
		public static implicit operator IfcDate(string v){ return new IfcDate(v); }	
		public static IfcDate FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDate>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
