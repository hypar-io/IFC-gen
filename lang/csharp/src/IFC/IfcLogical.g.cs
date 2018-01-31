	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclogical.htm
	/// </summary>
	public class IfcLogical : BaseIfc
	{
		internal bool? value;

		public IfcLogical(bool? value){ this.value = value; }	
		public static implicit operator bool?(IfcLogical v){ return v.value; }
		public static implicit operator IfcLogical(bool? v){ return new IfcLogical(v); }	
		public static IfcLogical FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLogical>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
