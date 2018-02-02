	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboolean.htm
	/// </summary>
	public class IfcBoolean : BaseIfc
	{
		internal bool value;

		public IfcBoolean(bool value){ this.value = value; }	
		public static implicit operator bool(IfcBoolean v){ return v.value; }
		public static implicit operator IfcBoolean(bool v){ return new IfcBoolean(v); }	
		public static IfcBoolean FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoolean>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
