

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingstorey.htm"/>
	/// </summary>
	public  partial class IfcBuildingStorey : IfcSpatialStructureElement
	{
		public IfcLengthMeasure Elevation{get;set;} // optional


		/// <summary>
		/// Construct a IfcBuildingStorey with all required attributes.
		/// </summary>
		public IfcBuildingStorey(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcBuildingStorey with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBuildingStorey(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName,IfcElementCompositionEnum compositionType,IfcLengthMeasure elevation):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName,compositionType)
		{

			Elevation = elevation;

		}
		public static new IfcBuildingStorey FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBuildingStorey>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(ObjectPlacement != null ? ObjectPlacement.ToStepValue() : "$");
			parameters.Add(Representation != null ? Representation.ToStepValue() : "$");
			parameters.Add(LongName != null ? LongName.ToStepValue() : "$");
			parameters.Add(CompositionType.ToStepValue());
			parameters.Add(Elevation != null ? Elevation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
