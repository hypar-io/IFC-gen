
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalSpatialElement} from "./IfcExternalSpatialElement.g"
import {IfcSpace} from "./IfcSpace.g"
import {IfcElement} from "./IfcElement.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcPhysicalOrVirtualEnum} from "./IfcPhysicalOrVirtualEnum.g"
import {IfcInternalOrExternalEnum} from "./IfcInternalOrExternalEnum.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary.htm
 */
export class IfcRelSpaceBoundary extends IfcRelConnects {
	RelatingSpace : IfcExternalSpatialElement|IfcSpace
	RelatedBuildingElement : IfcElement
	ConnectionGeometry : IfcConnectionGeometry // optional
	PhysicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum
	InternalOrExternalBoundary : IfcInternalOrExternalEnum

    constructor(globalId : IfcGloballyUniqueId, relatingSpace : IfcExternalSpatialElement|IfcSpace, relatedBuildingElement : IfcElement, physicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum, internalOrExternalBoundary : IfcInternalOrExternalEnum) {
        super(globalId)

		this.RelatingSpace = relatingSpace
		this.RelatedBuildingElement = relatedBuildingElement
		this.PhysicalOrVirtualBoundary = physicalOrVirtualBoundary
		this.InternalOrExternalBoundary = internalOrExternalBoundary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingSpace != null ? BaseIfc.toStepValue(this.RelatingSpace) : "$");
		parameters.push(this.RelatedBuildingElement != null ? BaseIfc.toStepValue(this.RelatedBuildingElement) : "$");
		parameters.push(this.ConnectionGeometry != null ? BaseIfc.toStepValue(this.ConnectionGeometry) : "$");
		parameters.push(BaseIfc.toStepValue(this.PhysicalOrVirtualBoundary));
		parameters.push(BaseIfc.toStepValue(this.InternalOrExternalBoundary));

        return parameters.join();
    }
}