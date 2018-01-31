	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermodynamictemperaturemeasure.htm
	/// </summary>
	public class IfcThermodynamicTemperatureMeasure : BaseIfc
	{
		internal double value;

		public IfcThermodynamicTemperatureMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcThermodynamicTemperatureMeasure v){ return v.value; }
		public static implicit operator IfcThermodynamicTemperatureMeasure(double v){ return new IfcThermodynamicTemperatureMeasure(v); }	
		public static IfcThermodynamicTemperatureMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcThermodynamicTemperatureMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
