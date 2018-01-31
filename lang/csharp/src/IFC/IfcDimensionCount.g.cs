	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensioncount.htm
	/// </summary>
	public class IfcDimensionCount : BaseIfc
	{
		internal int value;

		public IfcDimensionCount(int value){ this.value = value; }	
		public static implicit operator int(IfcDimensionCount v){ return v.value; }
		public static implicit operator IfcDimensionCount(int v){ return new IfcDimensionCount(v); }	
		public static IfcDimensionCount FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDimensionCount>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
