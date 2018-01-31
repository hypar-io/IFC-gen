	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexnumber.htm
	/// </summary>
	public class IfcComplexNumber : BaseIfc
	{
		internal List<double> value;

		public IfcComplexNumber(List<double> value){ this.value = value; }	
		public static implicit operator List<double>(IfcComplexNumber v){ return v.value; }
		public static implicit operator IfcComplexNumber(List<double> v){ return new IfcComplexNumber(v); }	
		public static IfcComplexNumber FromJSON(string json){ return JsonConvert.DeserializeObject<IfcComplexNumber>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
