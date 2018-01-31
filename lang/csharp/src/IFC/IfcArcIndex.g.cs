	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarcindex.htm
	/// </summary>
	public class IfcArcIndex : BaseIfc
	{
		internal List<IfcPositiveInteger> value;

		public IfcArcIndex(List<IfcPositiveInteger> value){ this.value = value; }	
		public static implicit operator List<IfcPositiveInteger>(IfcArcIndex v){ return v.value; }
		public static implicit operator IfcArcIndex(List<IfcPositiveInteger> v){ return new IfcArcIndex(v); }	
		public static IfcArcIndex FromJSON(string json){ return JsonConvert.DeserializeObject<IfcArcIndex>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
