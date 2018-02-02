
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
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcExternalSpatialElementTypeEnum} from "./IfcExternalSpatialElementTypeEnum.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"
import {IfcExternalSpatialStructureElement} from "./IfcExternalSpatialStructureElement.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalspatialelement.htm
 */
export class IfcExternalSpatialElement extends IfcExternalSpatialStructureElement {
	PredefinedType : IfcExternalSpatialElementTypeEnum // optional
	BoundedBy : Array<IfcRelSpaceBoundary> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.BoundedBy = new Array<IfcRelSpaceBoundary>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(this.ObjectPlacement != null ? BaseIfc.toStepValue(this.ObjectPlacement) : "$");
		parameters.push(this.Representation != null ? BaseIfc.toStepValue(this.Representation) : "$");
		parameters.push(this.LongName != null ? BaseIfc.toStepValue(this.LongName) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}