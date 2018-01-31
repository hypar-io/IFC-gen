	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclanguageid.htm
	/// </summary>
	public class IfcLanguageId : BaseIfc
	{
		internal IfcIdentifier value;

		public IfcLanguageId(IfcIdentifier value){ this.value = value; }	
		public static implicit operator IfcIdentifier(IfcLanguageId v){ return v.value; }
		public static implicit operator IfcLanguageId(IfcIdentifier v){ return new IfcLanguageId(v); }	
		public static IfcLanguageId FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLanguageId>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
