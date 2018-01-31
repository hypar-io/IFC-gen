
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelFillsElement} from "./IfcRelFillsElement.g"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements.g"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements.g"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement.g"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcReinforcingMeshTypeEnum} from "./IfcReinforcingMeshTypeEnum.g"
import {IfcReinforcingElement} from "./IfcReinforcingElement.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmesh.htm
export class IfcReinforcingMesh extends IfcReinforcingElement {
	MeshLength : IfcPositiveLengthMeasure// optional
	MeshWidth : IfcPositiveLengthMeasure// optional
	LongitudinalBarNominalDiameter : IfcPositiveLengthMeasure// optional
	TransverseBarNominalDiameter : IfcPositiveLengthMeasure// optional
	LongitudinalBarCrossSectionArea : IfcAreaMeasure// optional
	TransverseBarCrossSectionArea : IfcAreaMeasure// optional
	LongitudinalBarSpacing : IfcPositiveLengthMeasure// optional
	TransverseBarSpacing : IfcPositiveLengthMeasure// optional
	PredefinedType : IfcReinforcingMeshTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.ObjectPlacement != null ? this.toStepValue(this.ObjectPlacement) : "$");
		parameters.push(this.Representation != null ? this.toStepValue(this.Representation) : "$");
		parameters.push(this.Tag != null ? this.toStepValue(this.Tag) : "$");
		parameters.push(this.SteelGrade != null ? this.toStepValue(this.SteelGrade) : "$");
		parameters.push(this.MeshLength != null ? this.toStepValue(this.MeshLength) : "$");
		parameters.push(this.MeshWidth != null ? this.toStepValue(this.MeshWidth) : "$");
		parameters.push(this.LongitudinalBarNominalDiameter != null ? this.toStepValue(this.LongitudinalBarNominalDiameter) : "$");
		parameters.push(this.TransverseBarNominalDiameter != null ? this.toStepValue(this.TransverseBarNominalDiameter) : "$");
		parameters.push(this.LongitudinalBarCrossSectionArea != null ? this.toStepValue(this.LongitudinalBarCrossSectionArea) : "$");
		parameters.push(this.TransverseBarCrossSectionArea != null ? this.toStepValue(this.TransverseBarCrossSectionArea) : "$");
		parameters.push(this.LongitudinalBarSpacing != null ? this.toStepValue(this.LongitudinalBarSpacing) : "$");
		parameters.push(this.TransverseBarSpacing != null ? this.toStepValue(this.TransverseBarSpacing) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}