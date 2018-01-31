	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfontweight.htm
	/// </summary>
	public class IfcFontWeight : BaseIfc
	{
		internal string value;

		public IfcFontWeight(string value){ this.value = value; }	
		public static implicit operator string(IfcFontWeight v){ return v.value; }
		public static implicit operator IfcFontWeight(string v){ return new IfcFontWeight(v); }	
		public static IfcFontWeight FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFontWeight>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
