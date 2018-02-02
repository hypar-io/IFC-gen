

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentunit.htm"/>
	/// </summary>
	public  partial class IfcContextDependentUnit : IfcNamedUnit
	{
		public IfcLabel Name{get;set;} 
		public List<IfcExternalReferenceRelationship> HasExternalReference{get;set;} // inverse


		/// <summary>
		/// Construct a IfcContextDependentUnit with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcContextDependentUnit(IfcDimensionalExponents dimensions,IfcUnitEnum unitType,IfcLabel name):base(dimensions,unitType)
		{
			HasExternalReference = new List<IfcExternalReferenceRelationship>();

			Name = name;

		}
		public static new IfcContextDependentUnit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcContextDependentUnit>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Dimensions != null ? Dimensions.ToStepValue() : "$");
			parameters.Add(UnitType.ToStepValue());
			parameters.Add(Name != null ? Name.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
