	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmassperlengthmeasure.htm
	/// </summary>
	public class IfcMassPerLengthMeasure : BaseIfc
	{
		internal double value;

		public IfcMassPerLengthMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMassPerLengthMeasure v){ return v.value; }
		public static implicit operator IfcMassPerLengthMeasure(double v){ return new IfcMassPerLengthMeasure(v); }	
		public static IfcMassPerLengthMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMassPerLengthMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
