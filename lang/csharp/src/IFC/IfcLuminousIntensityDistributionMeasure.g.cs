	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcluminousintensitydistributionmeasure.htm
	/// </summary>
	public class IfcLuminousIntensityDistributionMeasure : BaseIfc
	{
		internal double value;

		public IfcLuminousIntensityDistributionMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLuminousIntensityDistributionMeasure v){ return v.value; }
		public static implicit operator IfcLuminousIntensityDistributionMeasure(double v){ return new IfcLuminousIntensityDistributionMeasure(v); }	
		public static IfcLuminousIntensityDistributionMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLuminousIntensityDistributionMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
