	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusofrotationalsubgradereactionmeasure.htm
	/// </summary>
	public class IfcModulusOfRotationalSubgradeReactionMeasure : BaseIfc
	{
		internal double value;

		public IfcModulusOfRotationalSubgradeReactionMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcModulusOfRotationalSubgradeReactionMeasure v){ return v.value; }
		public static implicit operator IfcModulusOfRotationalSubgradeReactionMeasure(double v){ return new IfcModulusOfRotationalSubgradeReactionMeasure(v); }	
		public static IfcModulusOfRotationalSubgradeReactionMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcModulusOfRotationalSubgradeReactionMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
