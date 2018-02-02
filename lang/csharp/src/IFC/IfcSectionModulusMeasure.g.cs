	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionmodulusmeasure.htm
	/// </summary>
	public class IfcSectionModulusMeasure : BaseIfc
	{
		internal double value;

		public IfcSectionModulusMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSectionModulusMeasure v){ return v.value; }
		public static implicit operator IfcSectionModulusMeasure(double v){ return new IfcSectionModulusMeasure(v); }	
		public static IfcSectionModulusMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSectionModulusMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
