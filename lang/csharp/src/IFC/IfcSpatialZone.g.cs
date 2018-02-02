

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialzone.htm"/>
	/// </summary>
	public  partial class IfcSpatialZone : IfcSpatialElement
	{
		public IfcSpatialZoneTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcSpatialZone with all required attributes.
		/// </summary>
		public IfcSpatialZone(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcSpatialZone with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSpatialZone(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName,IfcSpatialZoneTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcSpatialZone FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpatialZone>(json); }

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
