

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalspatialelement.htm"/>
	/// </summary>
	public  partial class IfcExternalSpatialElement : IfcExternalSpatialStructureElement
	{
		public IfcExternalSpatialElementTypeEnum PredefinedType{get;set;} // optional
		public List<IfcRelSpaceBoundary> BoundedBy{get;set;} // inverse


		/// <summary>
		/// Construct a IfcExternalSpatialElement with all required attributes.
		/// </summary>
		public IfcExternalSpatialElement(IfcGloballyUniqueId globalId):base(globalId)
		{
			BoundedBy = new List<IfcRelSpaceBoundary>();


		}
		/// <summary>
		/// Construct a IfcExternalSpatialElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternalSpatialElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName,IfcExternalSpatialElementTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName)
		{
			BoundedBy = new List<IfcRelSpaceBoundary>();

			PredefinedType = predefinedType;

		}
		public static new IfcExternalSpatialElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternalSpatialElement>(json); }

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
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
