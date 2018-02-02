	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccardinalpointreference.htm
	/// </summary>
	public class IfcCardinalPointReference : BaseIfc
	{
		internal int value;

		public IfcCardinalPointReference(int value){ this.value = value; }	
		public static implicit operator int(IfcCardinalPointReference v){ return v.value; }
		public static implicit operator IfcCardinalPointReference(int v){ return new IfcCardinalPointReference(v); }	
		public static IfcCardinalPointReference FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCardinalPointReference>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
