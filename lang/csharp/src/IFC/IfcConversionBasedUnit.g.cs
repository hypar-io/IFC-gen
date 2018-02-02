

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunit.htm"/>
	/// </summary>
	public  partial class IfcConversionBasedUnit : IfcNamedUnit
	{
		public IfcLabel Name{get;set;} 
		public IfcMeasureWithUnit ConversionFactor{get;set;} 
		public List<IfcExternalReferenceRelationship> HasExternalReference{get;set;} // inverse


		/// <summary>
		/// Construct a IfcConversionBasedUnit with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConversionBasedUnit(IfcDimensionalExponents dimensions,IfcUnitEnum unitType,IfcLabel name,IfcMeasureWithUnit conversionFactor):base(dimensions,unitType)
		{
			HasExternalReference = new List<IfcExternalReferenceRelationship>();

			Name = name;
			ConversionFactor = conversionFactor;

		}
		public static new IfcConversionBasedUnit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConversionBasedUnit>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Dimensions != null ? Dimensions.ToStepValue() : "$");
			parameters.Add(UnitType.ToStepValue());
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(ConversionFactor != null ? ConversionFactor.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
