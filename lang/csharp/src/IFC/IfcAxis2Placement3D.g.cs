

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement3d.htm"/>
	/// </summary>
	public  partial class IfcAxis2Placement3D : IfcPlacement
	{
		public IfcDirection Axis{get;set;} // optional
		public IfcDirection RefDirection{get;set;} // optional

        [JsonIgnore]
        public List<IfcDirection> P{get{throw new NotImplementedException($"Derived property logic has been implemented for P.");}} // derived


		/// <summary>
		/// Construct a IfcAxis2Placement3D with all required attributes.
		/// </summary>
		public IfcAxis2Placement3D(IfcCartesianPoint location):base(location)
		{


		}
		/// <summary>
		/// Construct a IfcAxis2Placement3D with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAxis2Placement3D(IfcCartesianPoint location,IfcDirection axis,IfcDirection refDirection):base(location)
		{

			Axis = axis;
			RefDirection = refDirection;

		}
		public static new IfcAxis2Placement3D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAxis2Placement3D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Axis != null ? Axis.ToStepValue() : "$");
			parameters.Add(RefDirection != null ? RefDirection.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
