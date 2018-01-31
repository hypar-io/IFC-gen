	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcareameasure.htm
	/// </summary>
	public class IfcAreaMeasure : BaseIfc
	{
		internal double value;

		public IfcAreaMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcAreaMeasure v){ return v.value; }
		public static implicit operator IfcAreaMeasure(double v){ return new IfcAreaMeasure(v); }	
		public static IfcAreaMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAreaMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
