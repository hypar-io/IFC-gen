	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusofelasticitymeasure.htm
	/// </summary>
	public class IfcModulusOfElasticityMeasure : BaseIfc
	{
		internal double value;

		public IfcModulusOfElasticityMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcModulusOfElasticityMeasure v){ return v.value; }
		public static implicit operator IfcModulusOfElasticityMeasure(double v){ return new IfcModulusOfElasticityMeasure(v); }	
		public static IfcModulusOfElasticityMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcModulusOfElasticityMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
