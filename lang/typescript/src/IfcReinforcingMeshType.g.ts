
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcReinforcingMeshTypeEnum} from "./IfcReinforcingMeshTypeEnum.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcBendingParameterSelect} from "./IfcBendingParameterSelect.g"
import {IfcReinforcingElementType} from "./IfcReinforcingElementType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmeshtype.htm
export class IfcReinforcingMeshType extends IfcReinforcingElementType {
	PredefinedType : IfcReinforcingMeshTypeEnum
	MeshLength : IfcPositiveLengthMeasure// optional
	MeshWidth : IfcPositiveLengthMeasure// optional
	LongitudinalBarNominalDiameter : IfcPositiveLengthMeasure// optional
	TransverseBarNominalDiameter : IfcPositiveLengthMeasure// optional
	LongitudinalBarCrossSectionArea : IfcAreaMeasure// optional
	TransverseBarCrossSectionArea : IfcAreaMeasure// optional
	LongitudinalBarSpacing : IfcPositiveLengthMeasure// optional
	TransverseBarSpacing : IfcPositiveLengthMeasure// optional
	BendingShapeCode : IfcLabel// optional
	BendingParameters : Array<IfcBendingParameterSelect>// optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcReinforcingMeshTypeEnum) {
        super(globalId)
		this.BendingParameters = new Array<IfcBendingParameterSelect>()

		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? this.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? this.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.RepresentationMaps != null ? this.toStepValue(this.RepresentationMaps) : "$");
		parameters.push(this.Tag != null ? this.toStepValue(this.Tag) : "$");
		parameters.push(this.ElementType != null ? this.toStepValue(this.ElementType) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.MeshLength != null ? this.toStepValue(this.MeshLength) : "$");
		parameters.push(this.MeshWidth != null ? this.toStepValue(this.MeshWidth) : "$");
		parameters.push(this.LongitudinalBarNominalDiameter != null ? this.toStepValue(this.LongitudinalBarNominalDiameter) : "$");
		parameters.push(this.TransverseBarNominalDiameter != null ? this.toStepValue(this.TransverseBarNominalDiameter) : "$");
		parameters.push(this.LongitudinalBarCrossSectionArea != null ? this.toStepValue(this.LongitudinalBarCrossSectionArea) : "$");
		parameters.push(this.TransverseBarCrossSectionArea != null ? this.toStepValue(this.TransverseBarCrossSectionArea) : "$");
		parameters.push(this.LongitudinalBarSpacing != null ? this.toStepValue(this.LongitudinalBarSpacing) : "$");
		parameters.push(this.TransverseBarSpacing != null ? this.toStepValue(this.TransverseBarSpacing) : "$");
		parameters.push(this.BendingShapeCode != null ? this.toStepValue(this.BendingShapeCode) : "$");
		parameters.push(this.BendingParameters != null ? this.toStepValue(this.BendingParameters) : "$");

        return parameters.join();
    }
}