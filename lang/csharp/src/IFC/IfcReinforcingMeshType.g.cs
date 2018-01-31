

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmeshtype.htm"/>
	/// </summary>
	public  partial class IfcReinforcingMeshType : IfcReinforcingElementType
	{
		public IfcReinforcingMeshTypeEnum PredefinedType{get;set;} 
		public IfcPositiveLengthMeasure MeshLength{get;set;} // optional
		public IfcPositiveLengthMeasure MeshWidth{get;set;} // optional
		public IfcPositiveLengthMeasure LongitudinalBarNominalDiameter{get;set;} // optional
		public IfcPositiveLengthMeasure TransverseBarNominalDiameter{get;set;} // optional
		public IfcAreaMeasure LongitudinalBarCrossSectionArea{get;set;} // optional
		public IfcAreaMeasure TransverseBarCrossSectionArea{get;set;} // optional
		public IfcPositiveLengthMeasure LongitudinalBarSpacing{get;set;} // optional
		public IfcPositiveLengthMeasure TransverseBarSpacing{get;set;} // optional
		public IfcLabel BendingShapeCode{get;set;} // optional
		public List<IfcBendingParameterSelect> BendingParameters{get;set;} // optional


		/// <summary>
		/// Construct a IfcReinforcingMeshType with all required attributes.
		/// </summary>
		public IfcReinforcingMeshType(IfcGloballyUniqueId globalId,IfcReinforcingMeshTypeEnum predefinedType):base(globalId)
		{
			BendingParameters = new List<IfcBendingParameterSelect>();

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcReinforcingMeshType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReinforcingMeshType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcReinforcingMeshTypeEnum predefinedType,IfcPositiveLengthMeasure meshLength,IfcPositiveLengthMeasure meshWidth,IfcPositiveLengthMeasure longitudinalBarNominalDiameter,IfcPositiveLengthMeasure transverseBarNominalDiameter,IfcAreaMeasure longitudinalBarCrossSectionArea,IfcAreaMeasure transverseBarCrossSectionArea,IfcPositiveLengthMeasure longitudinalBarSpacing,IfcPositiveLengthMeasure transverseBarSpacing,IfcLabel bendingShapeCode,List<IfcBendingParameterSelect> bendingParameters):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;
			MeshLength = meshLength;
			MeshWidth = meshWidth;
			LongitudinalBarNominalDiameter = longitudinalBarNominalDiameter;
			TransverseBarNominalDiameter = transverseBarNominalDiameter;
			LongitudinalBarCrossSectionArea = longitudinalBarCrossSectionArea;
			TransverseBarCrossSectionArea = transverseBarCrossSectionArea;
			LongitudinalBarSpacing = longitudinalBarSpacing;
			TransverseBarSpacing = transverseBarSpacing;
			BendingShapeCode = bendingShapeCode;
			BendingParameters = bendingParameters;

		}
		public static new IfcReinforcingMeshType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReinforcingMeshType>(json); }

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
			parameters.Add(MeshLength != null ? MeshLength.ToStepValue() : "$");
			parameters.Add(MeshWidth != null ? MeshWidth.ToStepValue() : "$");
			parameters.Add(LongitudinalBarNominalDiameter != null ? LongitudinalBarNominalDiameter.ToStepValue() : "$");
			parameters.Add(TransverseBarNominalDiameter != null ? TransverseBarNominalDiameter.ToStepValue() : "$");
			parameters.Add(LongitudinalBarCrossSectionArea != null ? LongitudinalBarCrossSectionArea.ToStepValue() : "$");
			parameters.Add(TransverseBarCrossSectionArea != null ? TransverseBarCrossSectionArea.ToStepValue() : "$");
			parameters.Add(LongitudinalBarSpacing != null ? LongitudinalBarSpacing.ToStepValue() : "$");
			parameters.Add(TransverseBarSpacing != null ? TransverseBarSpacing.ToStepValue() : "$");
			parameters.Add(BendingShapeCode != null ? BendingShapeCode.ToStepValue() : "$");
			parameters.Add(BendingParameters != null ? BendingParameters.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
