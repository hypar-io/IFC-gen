	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcareadensitymeasure.htm
	/// </summary>
	public class IfcAreaDensityMeasure : BaseIfc
	{
		internal double value;

		public IfcAreaDensityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcAreaDensityMeasure v){ return v.value; }
		public static implicit operator IfcAreaDensityMeasure(double v){ return new IfcAreaDensityMeasure(v); }	
		public static IfcAreaDensityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAreaDensityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
