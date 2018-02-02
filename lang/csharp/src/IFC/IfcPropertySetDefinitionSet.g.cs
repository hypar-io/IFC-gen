	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinitionset.htm
	/// </summary>
	public class IfcPropertySetDefinitionSet : BaseIfc
	{
		internal List<IfcPropertySetDefinition> value;

		public IfcPropertySetDefinitionSet(List<IfcPropertySetDefinition> value){ this.value = value; }	
		public static implicit operator List<IfcPropertySetDefinition>(IfcPropertySetDefinitionSet v){ return v.value; }
		public static implicit operator IfcPropertySetDefinitionSet(List<IfcPropertySetDefinition> v){ return new IfcPropertySetDefinitionSet(v); }	
		public static IfcPropertySetDefinitionSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertySetDefinitionSet>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
