

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorstyle.htm"/>
	/// </summary>
	public  partial class IfcDoorStyle : IfcTypeProduct
	{
		public IfcDoorStyleOperationEnum OperationType{get;set;} 
		public IfcDoorStyleConstructionEnum ConstructionType{get;set;} 
		public IfcBoolean ParameterTakesPrecedence{get;set;} 
		public IfcBoolean Sizeable{get;set;} 


		/// <summary>
		/// Construct a IfcDoorStyle with all required attributes.
		/// </summary>
		public IfcDoorStyle(IfcGloballyUniqueId globalId,IfcDoorStyleOperationEnum operationType,IfcDoorStyleConstructionEnum constructionType,IfcBoolean parameterTakesPrecedence,IfcBoolean sizeable):base(globalId)
		{

			OperationType = operationType;
			ConstructionType = constructionType;
			ParameterTakesPrecedence = parameterTakesPrecedence;
			Sizeable = sizeable;

		}
		/// <summary>
		/// Construct a IfcDoorStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDoorStyle(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcDoorStyleOperationEnum operationType,IfcDoorStyleConstructionEnum constructionType,IfcBoolean parameterTakesPrecedence,IfcBoolean sizeable):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag)
		{

			OperationType = operationType;
			ConstructionType = constructionType;
			ParameterTakesPrecedence = parameterTakesPrecedence;
			Sizeable = sizeable;

		}
		public static new IfcDoorStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDoorStyle>(json); }

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
			parameters.Add(OperationType.ToStepValue());
			parameters.Add(ConstructionType.ToStepValue());
			parameters.Add(ParameterTakesPrecedence != null ? ParameterTakesPrecedence.ToStepValue() : "$");
			parameters.Add(Sizeable != null ? Sizeable.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
