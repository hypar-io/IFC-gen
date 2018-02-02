	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvolumemeasure.htm
	/// </summary>
	public class IfcVolumeMeasure : BaseIfc
	{
		internal double value;

		public IfcVolumeMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcVolumeMeasure v){ return v.value; }
		public static implicit operator IfcVolumeMeasure(double v){ return new IfcVolumeMeasure(v); }	
		public static IfcVolumeMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVolumeMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
