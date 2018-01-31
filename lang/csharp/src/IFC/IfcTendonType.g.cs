

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendontype.htm"/>
	/// </summary>
	public  partial class IfcTendonType : IfcReinforcingElementType
	{
		public IfcTendonTypeEnum PredefinedType{get;set;} 
		public IfcPositiveLengthMeasure NominalDiameter{get;set;} // optional
		public IfcAreaMeasure CrossSectionArea{get;set;} // optional
		public IfcPositiveLengthMeasure SheathDiameter{get;set;} // optional


		/// <summary>
		/// Construct a IfcTendonType with all required attributes.
		/// </summary>
		public IfcTendonType(IfcGloballyUniqueId globalId,IfcTendonTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcTendonType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTendonType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcTendonTypeEnum predefinedType,IfcPositiveLengthMeasure nominalDiameter,IfcAreaMeasure crossSectionArea,IfcPositiveLengthMeasure sheathDiameter):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;
			NominalDiameter = nominalDiameter;
			CrossSectionArea = crossSectionArea;
			SheathDiameter = sheathDiameter;

		}
		public static new IfcTendonType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTendonType>(json); }

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
			parameters.Add(NominalDiameter != null ? NominalDiameter.ToStepValue() : "$");
			parameters.Add(CrossSectionArea != null ? CrossSectionArea.ToStepValue() : "$");
			parameters.Add(SheathDiameter != null ? SheathDiameter.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
