	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdayinmonthnumber.htm
	/// </summary>
	public class IfcDayInMonthNumber : BaseIfc
	{
		internal int value;

		public IfcDayInMonthNumber(int value){ this.value = value; }	
		public static implicit operator int(IfcDayInMonthNumber v){ return v.value; }
		public static implicit operator IfcDayInMonthNumber(int v){ return new IfcDayInMonthNumber(v); }	
		public static IfcDayInMonthNumber FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDayInMonthNumber>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
