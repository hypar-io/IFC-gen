	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdatetime.htm
	/// </summary>
	public class IfcDateTime : BaseIfc
	{
		internal string value;

		public IfcDateTime(string value){ this.value = value; }	
		public static implicit operator string(IfcDateTime v){ return v.value; }
		public static implicit operator IfcDateTime(string v){ return new IfcDateTime(v); }	
		public static IfcDateTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDateTime>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
