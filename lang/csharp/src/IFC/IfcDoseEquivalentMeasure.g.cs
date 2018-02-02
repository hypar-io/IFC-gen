	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoseequivalentmeasure.htm
	/// </summary>
	public class IfcDoseEquivalentMeasure : BaseIfc
	{
		internal double value;

		public IfcDoseEquivalentMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcDoseEquivalentMeasure v){ return v.value; }
		public static implicit operator IfcDoseEquivalentMeasure(double v){ return new IfcDoseEquivalentMeasure(v); }	
		public static IfcDoseEquivalentMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDoseEquivalentMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
