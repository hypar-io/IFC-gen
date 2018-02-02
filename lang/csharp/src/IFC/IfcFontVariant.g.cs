	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfontvariant.htm
	/// </summary>
	public class IfcFontVariant : BaseIfc
	{
		internal string value;

		public IfcFontVariant(string value){ this.value = value; }	
		public static implicit operator string(IfcFontVariant v){ return v.value; }
		public static implicit operator IfcFontVariant(string v){ return new IfcFontVariant(v); }	
		public static IfcFontVariant FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFontVariant>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
