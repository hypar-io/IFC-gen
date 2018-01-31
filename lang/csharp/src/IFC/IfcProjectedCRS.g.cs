

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectedcrs.htm"/>
	/// </summary>
	public  partial class IfcProjectedCRS : IfcCoordinateReferenceSystem
	{
		public IfcIdentifier MapProjection{get;set;} // optional
		public IfcIdentifier MapZone{get;set;} // optional
		public IfcNamedUnit MapUnit{get;set;} // optional


		/// <summary>
		/// Construct a IfcProjectedCRS with all required attributes.
		/// </summary>
		public IfcProjectedCRS(IfcLabel name):base(name)
		{


		}
		/// <summary>
		/// Construct a IfcProjectedCRS with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProjectedCRS(IfcLabel name,IfcText description,IfcIdentifier geodeticDatum,IfcIdentifier verticalDatum,IfcIdentifier mapProjection,IfcIdentifier mapZone,IfcNamedUnit mapUnit):base(name,description,geodeticDatum,verticalDatum)
		{

			MapProjection = mapProjection;
			MapZone = mapZone;
			MapUnit = mapUnit;

		}
		public static new IfcProjectedCRS FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProjectedCRS>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(GeodeticDatum != null ? GeodeticDatum.ToStepValue() : "$");
			parameters.Add(VerticalDatum != null ? VerticalDatum.ToStepValue() : "$");
			parameters.Add(MapProjection != null ? MapProjection.ToStepValue() : "$");
			parameters.Add(MapZone != null ? MapZone.ToStepValue() : "$");
			parameters.Add(MapUnit != null ? MapUnit.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
