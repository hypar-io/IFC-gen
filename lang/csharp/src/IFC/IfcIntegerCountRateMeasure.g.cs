	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcintegercountratemeasure.htm
	/// </summary>
	public class IfcIntegerCountRateMeasure : BaseIfc
	{
		internal int value;

		public IfcIntegerCountRateMeasure(int value){ this.value = value; }	
		public static implicit operator int(IfcIntegerCountRateMeasure v){ return v.value; }
		public static implicit operator IfcIntegerCountRateMeasure(int v){ return new IfcIntegerCountRateMeasure(v); }	
		public static IfcIntegerCountRateMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIntegerCountRateMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
