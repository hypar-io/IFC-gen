	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcluminousintensitymeasure.htm
	/// </summary>
	public class IfcLuminousIntensityMeasure : BaseIfc
	{
		internal double value;

		public IfcLuminousIntensityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLuminousIntensityMeasure v){ return v.value; }
		public static implicit operator IfcLuminousIntensityMeasure(double v){ return new IfcLuminousIntensityMeasure(v); }	
		public static IfcLuminousIntensityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLuminousIntensityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
