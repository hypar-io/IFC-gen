	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifckinematicviscositymeasure.htm
	/// </summary>
	public class IfcKinematicViscosityMeasure : BaseIfc
	{
		internal double value;

		public IfcKinematicViscosityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcKinematicViscosityMeasure v){ return v.value; }
		public static implicit operator IfcKinematicViscosityMeasure(double v){ return new IfcKinematicViscosityMeasure(v); }	
		public static IfcKinematicViscosityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcKinematicViscosityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
