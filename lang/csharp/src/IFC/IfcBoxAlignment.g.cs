	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxalignment.htm
	/// </summary>
	public class IfcBoxAlignment : BaseIfc
	{
		internal IfcLabel value;

		public IfcBoxAlignment(IfcLabel value){ this.value = value; }	
		public static implicit operator IfcLabel(IfcBoxAlignment v){ return v.value; }
		public static implicit operator IfcBoxAlignment(IfcLabel v){ return new IfcBoxAlignment(v); }	
		public static IfcBoxAlignment FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoxAlignment>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
