	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvaturemeasure.htm
	/// </summary>
	public class IfcCurvatureMeasure : BaseIfc
	{
		internal double value;

		public IfcCurvatureMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcCurvatureMeasure v){ return v.value; }
		public static implicit operator IfcCurvatureMeasure(double v){ return new IfcCurvatureMeasure(v); }	
		public static IfcCurvatureMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurvatureMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
