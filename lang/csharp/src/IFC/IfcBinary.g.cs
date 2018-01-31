	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbinary.htm
	/// </summary>
	public class IfcBinary : BaseIfc
	{
		internal byte[] value;

		public IfcBinary(byte[] value){ this.value = value; }	
		public static implicit operator byte[](IfcBinary v){ return v.value; }
		public static implicit operator IfcBinary(byte[] v){ return new IfcBinary(v); }	
		public static IfcBinary FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBinary>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
