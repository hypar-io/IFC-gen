
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
import {IfcRelSpaceBoundary1stLevel} from "./IfcRelSpaceBoundary1stLevel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary2ndlevel.htm
 */
export class IfcRelSpaceBoundary2ndLevel extends IfcRelSpaceBoundary1stLevel {
	CorrespondingBoundary : IfcRelSpaceBoundary2ndLevel // optional
	Corresponds : Array<IfcRelSpaceBoundary2ndLevel> // inverse

    constructor(globalId : IfcGloballyUniqueId, relatingSpace : IfcExternalSpatialElement|IfcSpace, relatedBuildingElement : IfcElement, physicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum, internalOrExternalBoundary : IfcInternalOrExternalEnum) {
        super(globalId,relatingSpace,relatedBuildingElement,physicalOrVirtualBoundary,internalOrExternalBoundary)
		this.Corresponds = new Array<IfcRelSpaceBoundary2ndLevel>()

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingSpace))
		parameters.push(BaseIfc.toStepValue(this.RelatedBuildingElement))
		parameters.push(BaseIfc.toStepValue(this.ConnectionGeometry))
		parameters.push(BaseIfc.toStepValue(this.PhysicalOrVirtualBoundary))
		parameters.push(BaseIfc.toStepValue(this.InternalOrExternalBoundary))
		parameters.push(BaseIfc.toStepValue(this.ParentBoundary))
		parameters.push(BaseIfc.toStepValue(this.CorrespondingBoundary))

            return parameters.join();
        }
}