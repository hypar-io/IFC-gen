
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
import {IfcRelSpaceBoundary1stLevel} from "./IfcRelSpaceBoundary1stLevel.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary2ndlevel.htm
export class IfcRelSpaceBoundary2ndLevel extends IfcRelSpaceBoundary1stLevel {
	CorrespondingBoundary : IfcRelSpaceBoundary2ndLevel// optional
	Corresponds : Array<IfcRelSpaceBoundary2ndLevel>// inverse

    constructor(globalId : IfcGloballyUniqueId, relatingSpace : IfcSpaceBoundarySelect, relatedBuildingElement : IfcElement, physicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum, internalOrExternalBoundary : IfcInternalOrExternalEnum) {
        super(globalId,relatingSpace,relatedBuildingElement,physicalOrVirtualBoundary,internalOrExternalBoundary)
		this.Corresponds = new Array<IfcRelSpaceBoundary2ndLevel>()

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
		parameters.push(this.CorrespondingBoundary != null ? this.toStepValue(this.CorrespondingBoundary) : "$");

        return parameters.join();
    }
}