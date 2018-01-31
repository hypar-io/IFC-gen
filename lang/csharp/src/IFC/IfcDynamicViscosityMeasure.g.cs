	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdynamicviscositymeasure.htm
	/// </summary>
	public class IfcDynamicViscosityMeasure : BaseIfc
	{
		internal double value;

		public IfcDynamicViscosityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcDynamicViscosityMeasure v){ return v.value; }
		public static implicit operator IfcDynamicViscosityMeasure(double v){ return new IfcDynamicViscosityMeasure(v); }	
		public static IfcDynamicViscosityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDynamicViscosityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
