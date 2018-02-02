	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdayinweeknumber.htm
	/// </summary>
	public class IfcDayInWeekNumber : BaseIfc
	{
		internal int value;

		public IfcDayInWeekNumber(int value){ this.value = value; }	
		public static implicit operator int(IfcDayInWeekNumber v){ return v.value; }
		public static implicit operator IfcDayInWeekNumber(int v){ return new IfcDayInWeekNumber(v); }	
		public static IfcDayInWeekNumber FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDayInWeekNumber>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
