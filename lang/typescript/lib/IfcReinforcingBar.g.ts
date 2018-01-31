
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelFillsElement} from "./IfcRelFillsElement"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcAreaMeasure} from "./IfcAreaMeasure"
import {IfcReinforcingBarTypeEnum} from "./IfcReinforcingBarTypeEnum"
import {IfcReinforcingBarSurfaceEnum} from "./IfcReinforcingBarSurfaceEnum"
import {IfcReinforcingElement} from "./IfcReinforcingElement"

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