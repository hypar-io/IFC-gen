
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRepresentation} from "./IfcRepresentation"
import {IfcMaterialDefinitionRepresentation} from "./IfcMaterialDefinitionRepresentation"
import {IfcProductDefinitionShape} from "./IfcProductDefinitionShape"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductrepresentation.htm
export abstract class IfcProductRepresentation extends BaseIfc {
	Name : IfcLabel// optional
	Description : IfcText// optional
	Representations : Array<IfcRepresentation>

    constructor(representations : Array<IfcRepresentation>) {
        super()

		this.Representations = representations

    }
}