

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialzonetype.htm"/>
	/// </summary>
	public  partial class IfcSpatialZoneType : IfcSpatialElementType
	{
		public IfcSpatialZoneTypeEnum PredefinedType{get;set;} 
		public IfcLabel LongName{get;set;} // optional


		/// <summary>
		/// Construct a IfcSpatialZoneType with all required attributes.
		/// </summary>
		public IfcSpatialZoneType(IfcGloballyUniqueId globalId,IfcSpatialZoneTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcSpatialZoneType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSpatialZoneType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcSpatialZoneTypeEnum predefinedType,IfcLabel longName):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;
			LongName = longName;

		}
		public static new IfcSpatialZoneType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpatialZoneType>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ApplicableOccurrence != null ? ApplicableOccurrence.ToStepValue() : "$");
			parameters.Add(HasPropertySets != null ? HasPropertySets.ToStepValue() : "$");
			parameters.Add(RepresentationMaps != null ? RepresentationMaps.ToStepValue() : "$");
			parameters.Add(Tag != null ? Tag.ToStepValue() : "$");
			parameters.Add(ElementType != null ? ElementType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(LongName != null ? LongName.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
