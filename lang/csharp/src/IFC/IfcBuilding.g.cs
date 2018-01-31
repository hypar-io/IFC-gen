

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuilding.htm"/>
	/// </summary>
	public  partial class IfcBuilding : IfcSpatialStructureElement
	{
		public IfcLengthMeasure ElevationOfRefHeight{get;set;} // optional
		public IfcLengthMeasure ElevationOfTerrain{get;set;} // optional
		public IfcPostalAddress BuildingAddress{get;set;} // optional


		/// <summary>
		/// Construct a IfcBuilding with all required attributes.
		/// </summary>
		public IfcBuilding(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcBuilding with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBuilding(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName,IfcElementCompositionEnum compositionType,IfcLengthMeasure elevationOfRefHeight,IfcLengthMeasure elevationOfTerrain,IfcPostalAddress buildingAddress):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName,compositionType)
		{

			ElevationOfRefHeight = elevationOfRefHeight;
			ElevationOfTerrain = elevationOfTerrain;
			BuildingAddress = buildingAddress;

		}
		public static new IfcBuilding FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBuilding>(json); }

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
			parameters.Add(ElevationOfRefHeight != null ? ElevationOfRefHeight.ToStepValue() : "$");
			parameters.Add(ElevationOfTerrain != null ? ElevationOfTerrain.ToStepValue() : "$");
			parameters.Add(BuildingAddress != null ? BuildingAddress.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
