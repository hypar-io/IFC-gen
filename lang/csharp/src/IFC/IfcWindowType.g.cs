

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowtype.htm"/>
	/// </summary>
	public  partial class IfcWindowType : IfcBuildingElementType
	{
		public IfcWindowTypeEnum PredefinedType{get;set;} 
		public IfcWindowTypePartitioningEnum PartitioningType{get;set;} 
		public IfcBoolean ParameterTakesPrecedence{get;set;} // optional
		public IfcLabel UserDefinedPartitioningType{get;set;} // optional


		/// <summary>
		/// Construct a IfcWindowType with all required attributes.
		/// </summary>
		public IfcWindowType(IfcGloballyUniqueId globalId,IfcWindowTypeEnum predefinedType,IfcWindowTypePartitioningEnum partitioningType):base(globalId)
		{

			PredefinedType = predefinedType;
			PartitioningType = partitioningType;

		}
		/// <summary>
		/// Construct a IfcWindowType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWindowType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcWindowTypeEnum predefinedType,IfcWindowTypePartitioningEnum partitioningType,IfcBoolean parameterTakesPrecedence,IfcLabel userDefinedPartitioningType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;
			PartitioningType = partitioningType;
			ParameterTakesPrecedence = parameterTakesPrecedence;
			UserDefinedPartitioningType = userDefinedPartitioningType;

		}
		public static new IfcWindowType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWindowType>(json); }

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
			parameters.Add(PartitioningType.ToStepValue());
			parameters.Add(ParameterTakesPrecedence != null ? ParameterTakesPrecedence.ToStepValue() : "$");
			parameters.Add(UserDefinedPartitioningType != null ? UserDefinedPartitioningType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
