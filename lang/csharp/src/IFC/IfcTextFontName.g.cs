	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextfontname.htm
	/// </summary>
	public class IfcTextFontName : BaseIfc
	{
		internal string value;

		public IfcTextFontName(string value){ this.value = value; }	
		public static implicit operator string(IfcTextFontName v){ return v.value; }
		public static implicit operator IfcTextFontName(string v){ return new IfcTextFontName(v); }	
		public static IfcTextFontName FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextFontName>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
