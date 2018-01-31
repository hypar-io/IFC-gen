

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridplacement.htm"/>
	/// </summary>
	public  partial class IfcGridPlacement : IfcObjectPlacement
	{
		public IfcVirtualGridIntersection PlacementLocation{get;set;} 
		public IfcGridPlacementDirectionSelect PlacementRefDirection{get;set;} // optional


		/// <summary>
		/// Construct a IfcGridPlacement with all required attributes.
		/// </summary>
		public IfcGridPlacement(IfcVirtualGridIntersection placementLocation):base()
		{

			PlacementLocation = placementLocation;

		}
		/// <summary>
		/// Construct a IfcGridPlacement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGridPlacement(IfcVirtualGridIntersection placementLocation,IfcGridPlacementDirectionSelect placementRefDirection):base()
		{

			PlacementLocation = placementLocation;
			PlacementRefDirection = placementRefDirection;

		}
		public static new IfcGridPlacement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGridPlacement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(PlacementLocation != null ? PlacementLocation.ToStepValue() : "$");
			parameters.Add(PlacementRefDirection != null ? PlacementRefDirection.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
