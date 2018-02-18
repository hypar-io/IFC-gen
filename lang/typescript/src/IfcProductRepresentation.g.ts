
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRepresentation} from "./IfcRepresentation.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductrepresentation.htm
 */
export abstract class IfcProductRepresentation extends BaseIfc {
	Name : IfcLabel // optional
	Description : IfcText // optional
	Representations : Array<IfcRepresentation>

    constructor(representations : Array<IfcRepresentation>) {
        super()
		this.Representations = representations

    }
}