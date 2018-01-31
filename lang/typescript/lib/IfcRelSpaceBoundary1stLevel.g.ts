
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcSpaceBoundarySelect} from "./IfcSpaceBoundarySelect.g"
import {IfcElement} from "./IfcElement.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcPhysicalOrVirtualEnum} from "./IfcPhysicalOrVirtualEnum.g"
import {IfcInternalOrExternalEnum} from "./IfcInternalOrExternalEnum.g"
import {IfcRelSpaceBoundary2ndLevel} from "./IfcRelSpaceBoundary2ndLevel.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary1stlevel.htm
export class IfcRelSpaceBoundary1stLevel extends IfcRelSpaceBoundary {
	ParentBoundary : IfcRelSpaceBoundary1stLevel// optional
	InnerBoundaries : Array<IfcRelSpaceBoundary1stLevel>// inverse

    constructor(globalId : IfcGloballyUniqueId, relatingSpace : IfcSpaceBoundarySelect, relatedBuildingElement : IfcElement, physicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum, internalOrExternalBoundary : IfcInternalOrExternalEnum) {
        super(globalId,relatingSpace,relatedBuildingElement,physicalOrVirtualBoundary,internalOrExternalBoundary)
		this.InnerBoundaries = new Array<IfcRelSpaceBoundary1stLevel>()

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
		parameters.push(this.ParentBoundary != null ? this.toStepValue(this.ParentBoundary) : "$");

        return parameters.join();
    }
}