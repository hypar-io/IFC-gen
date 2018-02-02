

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsiunit.htm"/>
	/// </summary>
	public  partial class IfcSIUnit : IfcNamedUnit
	{
		public IfcSIPrefix Prefix{get;set;} // optional
		public IfcSIUnitName Name{get;set;} 

        [JsonIgnore]
        new public IfcDimensionalExponents Dimensions{get{throw new NotImplementedException($"Derived property logic has been implemented for Dimensions.");}} // derived


		/// <summary>
		/// Construct a IfcSIUnit with all required attributes.
		/// </summary>
		public IfcSIUnit(IfcDimensionalExponents dimensions,IfcUnitEnum unitType,IfcSIUnitName name):base(dimensions,unitType)
		{

			Name = name;

		}
		/// <summary>
		/// Construct a IfcSIUnit with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSIUnit(IfcDimensionalExponents dimensions,IfcUnitEnum unitType,IfcSIPrefix prefix,IfcSIUnitName name):base(dimensions,unitType)
		{

			Prefix = prefix;
			Name = name;

		}
		public static new IfcSIUnit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSIUnit>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add("*");
			parameters.Add(UnitType.ToStepValue());
			parameters.Add(Prefix != null ? Prefix.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
