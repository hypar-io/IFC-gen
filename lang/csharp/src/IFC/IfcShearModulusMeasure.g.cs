	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshearmodulusmeasure.htm
	/// </summary>
	public class IfcShearModulusMeasure : BaseIfc
	{
		internal double value;

		public IfcShearModulusMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcShearModulusMeasure v){ return v.value; }
		public static implicit operator IfcShearModulusMeasure(double v){ return new IfcShearModulusMeasure(v); }	
		public static IfcShearModulusMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcShearModulusMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
