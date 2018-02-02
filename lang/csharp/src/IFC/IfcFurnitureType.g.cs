

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfurnituretype.htm"/>
	/// </summary>
	public  partial class IfcFurnitureType : IfcFurnishingElementType
	{
		public IfcAssemblyPlaceEnum AssemblyPlace{get;set;} 
		public IfcFurnitureTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcFurnitureType with all required attributes.
		/// </summary>
		public IfcFurnitureType(IfcGloballyUniqueId globalId,IfcAssemblyPlaceEnum assemblyPlace):base(globalId)
		{

			AssemblyPlace = assemblyPlace;

		}
		/// <summary>
		/// Construct a IfcFurnitureType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFurnitureType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcAssemblyPlaceEnum assemblyPlace,IfcFurnitureTypeEnum predefinedType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			AssemblyPlace = assemblyPlace;
			PredefinedType = predefinedType;

		}
		public static new IfcFurnitureType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFurnitureType>(json); }

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
			parameters.Add(AssemblyPlace.ToStepValue());
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
