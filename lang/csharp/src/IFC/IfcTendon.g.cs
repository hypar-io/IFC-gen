

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendon.htm"/>
	/// </summary>
	public  partial class IfcTendon : IfcReinforcingElement
	{
		public IfcTendonTypeEnum PredefinedType{get;set;} // optional
		public IfcPositiveLengthMeasure NominalDiameter{get;set;} // optional
		public IfcAreaMeasure CrossSectionArea{get;set;} // optional
		public IfcForceMeasure TensionForce{get;set;} // optional
		public IfcPressureMeasure PreStress{get;set;} // optional
		public IfcNormalisedRatioMeasure FrictionCoefficient{get;set;} // optional
		public IfcPositiveLengthMeasure AnchorageSlip{get;set;} // optional
		public IfcPositiveLengthMeasure MinCurvatureRadius{get;set;} // optional


		/// <summary>
		/// Construct a IfcTendon with all required attributes.
		/// </summary>
		public IfcTendon(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcTendon with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTendon(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcLabel steelGrade,IfcTendonTypeEnum predefinedType,IfcPositiveLengthMeasure nominalDiameter,IfcAreaMeasure crossSectionArea,IfcForceMeasure tensionForce,IfcPressureMeasure preStress,IfcNormalisedRatioMeasure frictionCoefficient,IfcPositiveLengthMeasure anchorageSlip,IfcPositiveLengthMeasure minCurvatureRadius):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag,steelGrade)
		{

			PredefinedType = predefinedType;
			NominalDiameter = nominalDiameter;
			CrossSectionArea = crossSectionArea;
			TensionForce = tensionForce;
			PreStress = preStress;
			FrictionCoefficient = frictionCoefficient;
			AnchorageSlip = anchorageSlip;
			MinCurvatureRadius = minCurvatureRadius;

		}
		public static new IfcTendon FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTendon>(json); }

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
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(NominalDiameter != null ? NominalDiameter.ToStepValue() : "$");
			parameters.Add(CrossSectionArea != null ? CrossSectionArea.ToStepValue() : "$");
			parameters.Add(TensionForce != null ? TensionForce.ToStepValue() : "$");
			parameters.Add(PreStress != null ? PreStress.ToStepValue() : "$");
			parameters.Add(FrictionCoefficient != null ? FrictionCoefficient.ToStepValue() : "$");
			parameters.Add(AnchorageSlip != null ? AnchorageSlip.ToStepValue() : "$");
			parameters.Add(MinCurvatureRadius != null ? MinCurvatureRadius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
