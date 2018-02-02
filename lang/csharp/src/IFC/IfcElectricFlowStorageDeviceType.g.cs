

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricflowstoragedevicetype.htm"/>
	/// </summary>
	public  partial class IfcElectricFlowStorageDeviceType : IfcFlowStorageDeviceType
	{
		public IfcElectricFlowStorageDeviceTypeEnum PredefinedType{get;set;} 


		/// <summary>
		/// Construct a IfcElectricFlowStorageDeviceType with all required attributes.
		/// </summary>
		public IfcElectricFlowStorageDeviceType(IfcGloballyUniqueId globalId,IfcElectricFlowStorageDeviceTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcElectricFlowStorageDeviceType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElectricFlowStorageDeviceType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcElectricFlowStorageDeviceTypeEnum predefinedType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcElectricFlowStorageDeviceType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElectricFlowStorageDeviceType>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
