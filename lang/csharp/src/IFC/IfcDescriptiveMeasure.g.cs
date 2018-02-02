	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdescriptivemeasure.htm
	/// </summary>
	public class IfcDescriptiveMeasure : BaseIfc
	{
		internal string value;

		public IfcDescriptiveMeasure(string value){ this.value = value; }	
		public static implicit operator string(IfcDescriptiveMeasure v){ return v.value; }
		public static implicit operator IfcDescriptiveMeasure(string v){ return new IfcDescriptiveMeasure(v); }	
		public static IfcDescriptiveMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDescriptiveMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
