
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
import {IfcReinforcingBarTypeEnum} from "./IfcReinforcingBarTypeEnum.g"
import {IfcReinforcingBarSurfaceEnum} from "./IfcReinforcingBarSurfaceEnum.g"
import {IfcReinforcingElement} from "./IfcReinforcingElement.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingbar.htm
export class IfcReinforcingBar extends IfcReinforcingElement {
	NominalDiameter : IfcPositiveLengthMeasure// optional
	CrossSectionArea : IfcAreaMeasure// optional
	BarLength : IfcPositiveLengthMeasure// optional
	PredefinedType : IfcReinforcingBarTypeEnum// optional
	BarSurface : IfcReinforcingBarSurfaceEnum// optional

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
		parameters.push(this.NominalDiameter != null ? this.toStepValue(this.NominalDiameter) : "$");
		parameters.push(this.CrossSectionArea != null ? this.toStepValue(this.CrossSectionArea) : "$");
		parameters.push(this.BarLength != null ? this.toStepValue(this.BarLength) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.toStepValue(this.BarSurface));

        return parameters.join();
    }
}