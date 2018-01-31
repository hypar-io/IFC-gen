	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclinearstiffnessmeasure.htm
	/// </summary>
	public class IfcLinearStiffnessMeasure : BaseIfc
	{
		internal double value;

		public IfcLinearStiffnessMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcLinearStiffnessMeasure v){ return v.value; }
		public static implicit operator IfcLinearStiffnessMeasure(double v){ return new IfcLinearStiffnessMeasure(v); }	
		public static IfcLinearStiffnessMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLinearStiffnessMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
