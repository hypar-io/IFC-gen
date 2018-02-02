	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusoflinearsubgradereactionmeasure.htm
	/// </summary>
	public class IfcModulusOfLinearSubgradeReactionMeasure : BaseIfc
	{
		internal double value;

		public IfcModulusOfLinearSubgradeReactionMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcModulusOfLinearSubgradeReactionMeasure v){ return v.value; }
		public static implicit operator IfcModulusOfLinearSubgradeReactionMeasure(double v){ return new IfcModulusOfLinearSubgradeReactionMeasure(v); }	
		public static IfcModulusOfLinearSubgradeReactionMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcModulusOfLinearSubgradeReactionMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
