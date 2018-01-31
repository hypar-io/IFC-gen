

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement2d.htm"/>
	/// </summary>
	public  partial class IfcAxis2Placement2D : IfcPlacement
	{
		public IfcDirection RefDirection{get;set;} // optional

        [JsonIgnore]
        public List<IfcDirection> P{get{throw new NotImplementedException($"Derived property logic has been implemented for P.");}} // derived


		/// <summary>
		/// Construct a IfcAxis2Placement2D with all required attributes.
		/// </summary>
		public IfcAxis2Placement2D(IfcCartesianPoint location):base(location)
		{


		}
		/// <summary>
		/// Construct a IfcAxis2Placement2D with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAxis2Placement2D(IfcCartesianPoint location,IfcDirection refDirection):base(location)
		{

			RefDirection = refDirection;

		}
		public static new IfcAxis2Placement2D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAxis2Placement2D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(RefDirection != null ? RefDirection.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
