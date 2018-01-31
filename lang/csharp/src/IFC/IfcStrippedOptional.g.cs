	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstrippedoptional.htm
	/// </summary>
	public class IfcStrippedOptional : BaseIfc
	{
		internal bool value;

		public IfcStrippedOptional(bool value){ this.value = value; }	
		public static implicit operator bool(IfcStrippedOptional v){ return v.value; }
		public static implicit operator IfcStrippedOptional(bool v){ return new IfcStrippedOptional(v); }	
		public static IfcStrippedOptional FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStrippedOptional>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
