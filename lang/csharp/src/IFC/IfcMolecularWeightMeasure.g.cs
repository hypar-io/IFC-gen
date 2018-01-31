	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmolecularweightmeasure.htm
	/// </summary>
	public class IfcMolecularWeightMeasure : BaseIfc
	{
		internal double value;

		public IfcMolecularWeightMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcMolecularWeightMeasure v){ return v.value; }
		public static implicit operator IfcMolecularWeightMeasure(double v){ return new IfcMolecularWeightMeasure(v); }	
		public static IfcMolecularWeightMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMolecularWeightMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
