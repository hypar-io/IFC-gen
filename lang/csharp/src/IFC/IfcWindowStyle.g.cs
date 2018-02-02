

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowstyle.htm"/>
	/// </summary>
	public  partial class IfcWindowStyle : IfcTypeProduct
	{
		public IfcWindowStyleConstructionEnum ConstructionType{get;set;} 
		public IfcWindowStyleOperationEnum OperationType{get;set;} 
		public IfcBoolean ParameterTakesPrecedence{get;set;} 
		public IfcBoolean Sizeable{get;set;} 


		/// <summary>
		/// Construct a IfcWindowStyle with all required attributes.
		/// </summary>
		public IfcWindowStyle(IfcGloballyUniqueId globalId,IfcWindowStyleConstructionEnum constructionType,IfcWindowStyleOperationEnum operationType,IfcBoolean parameterTakesPrecedence,IfcBoolean sizeable):base(globalId)
		{

			ConstructionType = constructionType;
			OperationType = operationType;
			ParameterTakesPrecedence = parameterTakesPrecedence;
			Sizeable = sizeable;

		}
		/// <summary>
		/// Construct a IfcWindowStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWindowStyle(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcWindowStyleConstructionEnum constructionType,IfcWindowStyleOperationEnum operationType,IfcBoolean parameterTakesPrecedence,IfcBoolean sizeable):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag)
		{

			ConstructionType = constructionType;
			OperationType = operationType;
			ParameterTakesPrecedence = parameterTakesPrecedence;
			Sizeable = sizeable;

		}
		public static new IfcWindowStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWindowStyle>(json); }

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
			parameters.Add(ConstructionType.ToStepValue());
			parameters.Add(OperationType.ToStepValue());
			parameters.Add(ParameterTakesPrecedence != null ? ParameterTakesPrecedence.ToStepValue() : "$");
			parameters.Add(Sizeable != null ? Sizeable.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
