

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis1placement.htm"/>
	/// </summary>
	public  partial class IfcAxis1Placement : IfcPlacement
	{
		public IfcDirection Axis{get;set;} // optional

        [JsonIgnore]
        public IfcDirection Z{get{throw new NotImplementedException($"Derived property logic has been implemented for Z.");}} // derived


		/// <summary>
		/// Construct a IfcAxis1Placement with all required attributes.
		/// </summary>
		public IfcAxis1Placement(IfcCartesianPoint location):base(location)
		{


		}
		/// <summary>
		/// Construct a IfcAxis1Placement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAxis1Placement(IfcCartesianPoint location,IfcDirection axis):base(location)
		{

			Axis = axis;

		}
		public static new IfcAxis1Placement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAxis1Placement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Axis != null ? Axis.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
