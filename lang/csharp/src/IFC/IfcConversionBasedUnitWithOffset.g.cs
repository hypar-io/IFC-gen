

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunitwithoffset.htm"/>
	/// </summary>
	public  partial class IfcConversionBasedUnitWithOffset : IfcConversionBasedUnit
	{
		public IfcReal ConversionOffset{get;set;} 


		/// <summary>
		/// Construct a IfcConversionBasedUnitWithOffset with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConversionBasedUnitWithOffset(IfcDimensionalExponents dimensions,IfcUnitEnum unitType,IfcLabel name,IfcMeasureWithUnit conversionFactor,IfcReal conversionOffset):base(dimensions,unitType,name,conversionFactor)
		{

			ConversionOffset = conversionOffset;

		}
		public static new IfcConversionBasedUnitWithOffset FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConversionBasedUnitWithOffset>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Dimensions != null ? Dimensions.ToStepValue() : "$");
			parameters.Add(UnitType.ToStepValue());
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(ConversionFactor != null ? ConversionFactor.ToStepValue() : "$");
			parameters.Add(ConversionOffset != null ? ConversionOffset.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
