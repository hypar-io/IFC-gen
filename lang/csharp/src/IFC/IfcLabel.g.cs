	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclabel.htm
	/// </summary>
	public class IfcLabel : BaseIfc
	{
		internal string value;

		public IfcLabel(string value){ this.value = value; }	
		public static implicit operator string(IfcLabel v){ return v.value; }
		public static implicit operator IfcLabel(string v){ return new IfcLabel(v); }	
		public static IfcLabel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLabel>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
