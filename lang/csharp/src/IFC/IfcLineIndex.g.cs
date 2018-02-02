	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclineindex.htm
	/// </summary>
	public class IfcLineIndex : BaseIfc
	{
		internal List<IfcPositiveInteger> value;

		public IfcLineIndex(List<IfcPositiveInteger> value){ this.value = value; }	
		public static implicit operator List<IfcPositiveInteger>(IfcLineIndex v){ return v.value; }
		public static implicit operator IfcLineIndex(List<IfcPositiveInteger> v){ return new IfcLineIndex(v); }	
		public static IfcLineIndex FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLineIndex>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
