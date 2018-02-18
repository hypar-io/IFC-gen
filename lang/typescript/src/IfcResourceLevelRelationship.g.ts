
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcelevelrelationship.htm
 */
export abstract class IfcResourceLevelRelationship extends BaseIfc {
	Name : IfcLabel // optional
	Description : IfcText // optional

    constructor() {
        super()
    }
}