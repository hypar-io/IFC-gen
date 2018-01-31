

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoortype.htm"/>
	/// </summary>
	public  partial class IfcDoorType : IfcBuildingElementType
	{
		public IfcDoorTypeEnum PredefinedType{get;set;} 
		public IfcDoorTypeOperationEnum OperationType{get;set;} 
		public IfcBoolean ParameterTakesPrecedence{get;set;} // optional
		public IfcLabel UserDefinedOperationType{get;set;} // optional


		/// <summary>
		/// Construct a IfcDoorType with all required attributes.
		/// </summary>
		public IfcDoorType(IfcGloballyUniqueId globalId,IfcDoorTypeEnum predefinedType,IfcDoorTypeOperationEnum operationType):base(globalId)
		{

			PredefinedType = predefinedType;
			OperationType = operationType;

		}
		/// <summary>
		/// Construct a IfcDoorType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDoorType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcDoorTypeEnum predefinedType,IfcDoorTypeOperationEnum operationType,IfcBoolean parameterTakesPrecedence,IfcLabel userDefinedOperationType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;
			OperationType = operationType;
			ParameterTakesPrecedence = parameterTakesPrecedence;
			UserDefinedOperationType = userDefinedOperationType;

		}
		public static new IfcDoorType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDoorType>(json); }

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
			parameters.Add(OperationType.ToStepValue());
			parameters.Add(ParameterTakesPrecedence != null ? ParameterTakesPrecedence.ToStepValue() : "$");
			parameters.Add(UserDefinedOperationType != null ? UserDefinedOperationType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
