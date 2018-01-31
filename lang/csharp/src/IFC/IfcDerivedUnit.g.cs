

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunit.htm"/>
	/// </summary>
	public  partial class IfcDerivedUnit : BaseIfc
	{
		public List<IfcDerivedUnitElement> Elements{get;set;} 
		public IfcDerivedUnitEnum UnitType{get;set;} 
		public IfcLabel UserDefinedType{get;set;} // optional

        [JsonIgnore]
        public IfcDimensionalExponents Dimensions{get{throw new NotImplementedException($"Derived property logic has been implemented for Dimensions.");}} // derived


		/// <summary>
		/// Construct a IfcDerivedUnit with all required attributes.
		/// </summary>
		public IfcDerivedUnit(List<IfcDerivedUnitElement> elements,IfcDerivedUnitEnum unitType):base()
		{

			Elements = elements;
			UnitType = unitType;

		}
		/// <summary>
		/// Construct a IfcDerivedUnit with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDerivedUnit(List<IfcDerivedUnitElement> elements,IfcDerivedUnitEnum unitType,IfcLabel userDefinedType):base()
		{

			Elements = elements;
			UnitType = unitType;
			UserDefinedType = userDefinedType;

		}
		public static  IfcDerivedUnit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDerivedUnit>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Elements != null ? Elements.ToStepValue() : "$");
			parameters.Add(UnitType.ToStepValue());
			parameters.Add(UserDefinedType != null ? UserDefinedType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
