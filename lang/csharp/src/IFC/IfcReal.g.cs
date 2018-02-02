	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreal.htm
	/// </summary>
	public class IfcReal : BaseIfc
	{
		internal double value;

		public IfcReal(double value){ this.value = value; }	
		public static implicit operator double(IfcReal v){ return v.value; }
		public static implicit operator IfcReal(double v){ return new IfcReal(v); }	
		public static IfcReal FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReal>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
