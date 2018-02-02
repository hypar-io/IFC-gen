	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmassdensitymeasure.htm
	/// </summary>
	public class IfcMassDensityMeasure : BaseIfc
	{
		internal double value;

		public IfcMassDensityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMassDensityMeasure v){ return v.value; }
		public static implicit operator IfcMassDensityMeasure(double v){ return new IfcMassDensityMeasure(v); }	
		public static IfcMassDensityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMassDensityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
