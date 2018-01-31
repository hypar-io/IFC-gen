	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusofsubgradereactionmeasure.htm
	/// </summary>
	public class IfcModulusOfSubgradeReactionMeasure : BaseIfc
	{
		internal double value;

		public IfcModulusOfSubgradeReactionMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcModulusOfSubgradeReactionMeasure v){ return v.value; }
		public static implicit operator IfcModulusOfSubgradeReactionMeasure(double v){ return new IfcModulusOfSubgradeReactionMeasure(v); }	
		public static IfcModulusOfSubgradeReactionMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcModulusOfSubgradeReactionMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
