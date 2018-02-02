	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrotationalmassmeasure.htm
	/// </summary>
	public class IfcRotationalMassMeasure : BaseIfc
	{
		internal double value;

		public IfcRotationalMassMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcRotationalMassMeasure v){ return v.value; }
		public static implicit operator IfcRotationalMassMeasure(double v){ return new IfcRotationalMassMeasure(v); }	
		public static IfcRotationalMassMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRotationalMassMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
