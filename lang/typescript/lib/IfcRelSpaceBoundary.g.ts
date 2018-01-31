
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcSpaceBoundarySelect} from "./IfcSpaceBoundarySelect"
import {IfcElement} from "./IfcElement"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry"
import {IfcPhysicalOrVirtualEnum} from "./IfcPhysicalOrVirtualEnum"
import {IfcInternalOrExternalEnum} from "./IfcInternalOrExternalEnum"
import {IfcRelSpaceBoundary1stLevel} from "./IfcRelSpaceBoundary1stLevel"
import {IfcRelConnects} from "./IfcRelConnects"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary.htm
export class IfcRelSpaceBoundary extends IfcRelConnects {
	RelatingSpace : IfcSpaceBoundarySelect
	RelatedBuildingElement : IfcElement
	ConnectionGeometry : IfcConnectionGeometry// optional
	PhysicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum
	InternalOrExternalBoundary : IfcInternalOrExternalEnum

    constructor(globalId : IfcGloballyUniqueId, relatingSpace : IfcSpaceBoundarySelect, relatedBuildingElement : IfcElement, physicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum, internalOrExternalBoundary : IfcInternalOrExternalEnum) {
        super(globalId)

		this.RelatingSpace = relatingSpace
		this.RelatedBuildingElement = relatedBuildingElement
		this.PhysicalOrVirtualBoundary = physicalOrVirtualBoundary
		this.InternalOrExternalBoundary = internalOrExternalBoundary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingSpace != null ? this.toStepValue(this.RelatingSpace) : "$");
		parameters.push(this.RelatedBuildingElement != null ? this.toStepValue(this.RelatedBuildingElement) : "$");
		parameters.push(this.ConnectionGeometry != null ? this.toStepValue(this.ConnectionGeometry) : "$");
		parameters.push(this.toStepValue(this.PhysicalOrVirtualBoundary));
		parameters.push(this.toStepValue(this.InternalOrExternalBoundary));

        return parameters.join();
    }
}