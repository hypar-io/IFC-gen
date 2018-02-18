
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialusagedefinition.htm
 */
export abstract class IfcMaterialUsageDefinition extends BaseIfc {
	AssociatedTo : Array<IfcRelAssociatesMaterial> // inverse

    constructor() {
        super()
    }
}