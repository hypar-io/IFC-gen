	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvolumetricflowratemeasure.htm
	/// </summary>
	public class IfcVolumetricFlowRateMeasure : BaseIfc
	{
		internal double value;

		public IfcVolumetricFlowRateMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcVolumetricFlowRateMeasure v){ return v.value; }
		public static implicit operator IfcVolumetricFlowRateMeasure(double v){ return new IfcVolumetricFlowRateMeasure(v); }	
		public static IfcVolumetricFlowRateMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVolumetricFlowRateMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
