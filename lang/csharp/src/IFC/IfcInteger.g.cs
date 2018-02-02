	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinteger.htm
	/// </summary>
	public class IfcInteger : BaseIfc
	{
		internal int value;

		public IfcInteger(int value){ this.value = value; }	
		public static implicit operator int(IfcInteger v){ return v.value; }
		public static implicit operator IfcInteger(int v){ return new IfcInteger(v); }	
		public static IfcInteger FromJSON(string json){ return JsonConvert.DeserializeObject<IfcInteger>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
