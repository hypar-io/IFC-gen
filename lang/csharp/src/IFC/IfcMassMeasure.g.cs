	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmassmeasure.htm
	/// </summary>
	public class IfcMassMeasure : BaseIfc
	{
		internal double value;

		public IfcMassMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMassMeasure v){ return v.value; }
		public static implicit operator IfcMassMeasure(double v){ return new IfcMassMeasure(v); }	
		public static IfcMassMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMassMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
