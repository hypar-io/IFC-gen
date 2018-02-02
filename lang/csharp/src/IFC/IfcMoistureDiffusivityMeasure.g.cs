	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmoisturediffusivitymeasure.htm
	/// </summary>
	public class IfcMoistureDiffusivityMeasure : BaseIfc
	{
		internal double value;

		public IfcMoistureDiffusivityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMoistureDiffusivityMeasure v){ return v.value; }
		public static implicit operator IfcMoistureDiffusivityMeasure(double v){ return new IfcMoistureDiffusivityMeasure(v); }	
		public static IfcMoistureDiffusivityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMoistureDiffusivityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
