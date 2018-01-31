

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspace.htm"/>
	/// </summary>
	public  partial class IfcSpace : IfcSpatialStructureElement
	{
		public IfcSpaceTypeEnum PredefinedType{get;set;} // optional
		public IfcLengthMeasure ElevationWithFlooring{get;set;} // optional
		public List<IfcRelCoversSpaces> HasCoverings{get;set;} // inverse
		public List<IfcRelSpaceBoundary> BoundedBy{get;set;} // inverse


		/// <summary>
		/// Construct a IfcSpace with all required attributes.
		/// </summary>
		public IfcSpace(IfcGloballyUniqueId globalId):base(globalId)
		{
			HasCoverings = new List<IfcRelCoversSpaces>();
			BoundedBy = new List<IfcRelSpaceBoundary>();


		}
		/// <summary>
		/// Construct a IfcSpace with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSpace(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName,IfcElementCompositionEnum compositionType,IfcSpaceTypeEnum predefinedType,IfcLengthMeasure elevationWithFlooring):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName,compositionType)
		{
			HasCoverings = new List<IfcRelCoversSpaces>();
			BoundedBy = new List<IfcRelSpaceBoundary>();

			PredefinedType = predefinedType;
			ElevationWithFlooring = elevationWithFlooring;

		}
		public static new IfcSpace FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpace>(json); }

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
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(ElevationWithFlooring != null ? ElevationWithFlooring.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
