

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclocalplacement.htm"/>
	/// </summary>
	public  partial class IfcLocalPlacement : IfcObjectPlacement
	{
		public IfcObjectPlacement PlacementRelTo{get;set;} // optional
		public IfcAxis2Placement RelativePlacement{get;set;} 


		/// <summary>
		/// Construct a IfcLocalPlacement with all required attributes.
		/// </summary>
		public IfcLocalPlacement(IfcAxis2Placement relativePlacement):base()
		{

			RelativePlacement = relativePlacement;

		}
		/// <summary>
		/// Construct a IfcLocalPlacement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLocalPlacement(IfcObjectPlacement placementRelTo,IfcAxis2Placement relativePlacement):base()
		{

			PlacementRelTo = placementRelTo;
			RelativePlacement = relativePlacement;

		}
		public static new IfcLocalPlacement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLocalPlacement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(PlacementRelTo != null ? PlacementRelTo.ToStepValue() : "$");
			parameters.Add(RelativePlacement != null ? RelativePlacement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
