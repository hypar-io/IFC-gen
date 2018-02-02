	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvaporpermeabilitymeasure.htm
	/// </summary>
	public class IfcVaporPermeabilityMeasure : BaseIfc
	{
		internal double value;

		public IfcVaporPermeabilityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcVaporPermeabilityMeasure v){ return v.value; }
		public static implicit operator IfcVaporPermeabilityMeasure(double v){ return new IfcVaporPermeabilityMeasure(v); }	
		public static IfcVaporPermeabilityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVaporPermeabilityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
