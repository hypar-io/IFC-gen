	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcidentifier.htm
	/// </summary>
	public class IfcIdentifier : BaseIfc
	{
		internal string value;

		public IfcIdentifier(string value){ this.value = value; }	
		public static implicit operator string(IfcIdentifier v){ return v.value; }
		public static implicit operator IfcIdentifier(string v){ return new IfcIdentifier(v); }	
		public static IfcIdentifier FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIdentifier>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
