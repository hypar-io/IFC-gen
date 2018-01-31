

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmesh.htm"/>
	/// </summary>
	public  partial class IfcReinforcingMesh : IfcReinforcingElement
	{
		public IfcPositiveLengthMeasure MeshLength{get;set;} // optional
		public IfcPositiveLengthMeasure MeshWidth{get;set;} // optional
		public IfcPositiveLengthMeasure LongitudinalBarNominalDiameter{get;set;} // optional
		public IfcPositiveLengthMeasure TransverseBarNominalDiameter{get;set;} // optional
		public IfcAreaMeasure LongitudinalBarCrossSectionArea{get;set;} // optional
		public IfcAreaMeasure TransverseBarCrossSectionArea{get;set;} // optional
		public IfcPositiveLengthMeasure LongitudinalBarSpacing{get;set;} // optional
		public IfcPositiveLengthMeasure TransverseBarSpacing{get;set;} // optional
		public IfcReinforcingMeshTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcReinforcingMesh with all required attributes.
		/// </summary>
		public IfcReinforcingMesh(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcReinforcingMesh with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReinforcingMesh(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcLabel steelGrade,IfcPositiveLengthMeasure meshLength,IfcPositiveLengthMeasure meshWidth,IfcPositiveLengthMeasure longitudinalBarNominalDiameter,IfcPositiveLengthMeasure transverseBarNominalDiameter,IfcAreaMeasure longitudinalBarCrossSectionArea,IfcAreaMeasure transverseBarCrossSectionArea,IfcPositiveLengthMeasure longitudinalBarSpacing,IfcPositiveLengthMeasure transverseBarSpacing,IfcReinforcingMeshTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag,steelGrade)
		{

			MeshLength = meshLength;
			MeshWidth = meshWidth;
			LongitudinalBarNominalDiameter = longitudinalBarNominalDiameter;
			TransverseBarNominalDiameter = transverseBarNominalDiameter;
			LongitudinalBarCrossSectionArea = longitudinalBarCrossSectionArea;
			TransverseBarCrossSectionArea = transverseBarCrossSectionArea;
			LongitudinalBarSpacing = longitudinalBarSpacing;
			TransverseBarSpacing = transverseBarSpacing;
			PredefinedType = predefinedType;

		}
		public static new IfcReinforcingMesh FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReinforcingMesh>(json); }

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
			parameters.Add(Tag != null ? Tag.ToStepValue() : "$");
			parameters.Add(SteelGrade != null ? SteelGrade.ToStepValue() : "$");
			parameters.Add(MeshLength != null ? MeshLength.ToStepValue() : "$");
			parameters.Add(MeshWidth != null ? MeshWidth.ToStepValue() : "$");
			parameters.Add(LongitudinalBarNominalDiameter != null ? LongitudinalBarNominalDiameter.ToStepValue() : "$");
			parameters.Add(TransverseBarNominalDiameter != null ? TransverseBarNominalDiameter.ToStepValue() : "$");
			parameters.Add(LongitudinalBarCrossSectionArea != null ? LongitudinalBarCrossSectionArea.ToStepValue() : "$");
			parameters.Add(TransverseBarCrossSectionArea != null ? TransverseBarCrossSectionArea.ToStepValue() : "$");
			parameters.Add(LongitudinalBarSpacing != null ? LongitudinalBarSpacing.ToStepValue() : "$");
			parameters.Add(TransverseBarSpacing != null ? TransverseBarSpacing.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
