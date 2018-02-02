	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonthinyearnumber.htm
	/// </summary>
	public class IfcMonthInYearNumber : BaseIfc
	{
		internal int value;

		public IfcMonthInYearNumber(int value){ this.value = value; }	
		public static implicit operator int(IfcMonthInYearNumber v){ return v.value; }
		public static implicit operator IfcMonthInYearNumber(int v){ return new IfcMonthInYearNumber(v); }	
		public static IfcMonthInYearNumber FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMonthInYearNumber>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
