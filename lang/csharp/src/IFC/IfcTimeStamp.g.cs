	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimestamp.htm
	/// </summary>
	public class IfcTimeStamp : BaseIfc
	{
		internal int value;

		public IfcTimeStamp(int value){ this.value = value; }	
		public static implicit operator int(IfcTimeStamp v){ return v.value; }
		public static implicit operator IfcTimeStamp(int v){ return new IfcTimeStamp(v); }	
		public static IfcTimeStamp FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTimeStamp>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
