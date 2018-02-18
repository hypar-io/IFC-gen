
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcSystem} from "./IfcSystem.g"
import {IfcSpatialElement} from "./IfcSpatialElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelservicesbuildings.htm
 */
export class IfcRelServicesBuildings extends IfcRelConnects {
	RelatingSystem : IfcSystem
	RelatedBuildings : Array<IfcSpatialElement>

    constructor(globalId : IfcGloballyUniqueId, relatingSystem : IfcSystem, relatedBuildings : Array<IfcSpatialElement>) {
        super(globalId)
		this.RelatingSystem = relatingSystem
		this.RelatedBuildings = relatedBuildings

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingSystem))
		parameters.push(BaseIfc.toStepValue(this.RelatedBuildings))

        return parameters.join();
    }
}