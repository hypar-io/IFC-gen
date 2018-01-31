	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrotationalstiffnessmeasure.htm
	/// </summary>
	public class IfcRotationalStiffnessMeasure : BaseIfc
	{
		internal double value;

		public IfcRotationalStiffnessMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcRotationalStiffnessMeasure v){ return v.value; }
		public static implicit operator IfcRotationalStiffnessMeasure(double v){ return new IfcRotationalStiffnessMeasure(v); }	
		public static IfcRotationalStiffnessMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRotationalStiffnessMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
