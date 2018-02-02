	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgloballyuniqueid.htm
	/// </summary>
	public class IfcGloballyUniqueId : BaseIfc
	{
		internal string value;

		public IfcGloballyUniqueId(string value){ this.value = value; }	
		public static implicit operator string(IfcGloballyUniqueId v){ return v.value; }
		public static implicit operator IfcGloballyUniqueId(string v){ return new IfcGloballyUniqueId(v); }	
		public static IfcGloballyUniqueId FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGloballyUniqueId>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
