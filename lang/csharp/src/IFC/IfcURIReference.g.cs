	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcurireference.htm
	/// </summary>
	public class IfcURIReference : BaseIfc
	{
		internal string value;

		public IfcURIReference(string value){ this.value = value; }	
		public static implicit operator string(IfcURIReference v){ return v.value; }
		public static implicit operator IfcURIReference(string v){ return new IfcURIReference(v); }	
		public static IfcURIReference FromJSON(string json){ return JsonConvert.DeserializeObject<IfcURIReference>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
