	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccountmeasure.htm
	/// </summary>
	public class IfcCountMeasure : BaseIfc
	{
		internal double value;

		public IfcCountMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcCountMeasure v){ return v.value; }
		public static implicit operator IfcCountMeasure(double v){ return new IfcCountMeasure(v); }	
		public static IfcCountMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCountMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
