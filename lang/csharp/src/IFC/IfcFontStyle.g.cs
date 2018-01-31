	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfontstyle.htm
	/// </summary>
	public class IfcFontStyle : BaseIfc
	{
		internal string value;

		public IfcFontStyle(string value){ this.value = value; }	
		public static implicit operator string(IfcFontStyle v){ return v.value; }
		public static implicit operator IfcFontStyle(string v){ return new IfcFontStyle(v); }	
		public static IfcFontStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFontStyle>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
