
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcMaterialLayerSetUsage} from "./IfcMaterialLayerSetUsage.g"
import {IfcMaterialProfileSetUsage} from "./IfcMaterialProfileSetUsage.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialusagedefinition.htm
export abstract class IfcMaterialUsageDefinition extends BaseIfc {
	AssociatedTo : Array<IfcRelAssociatesMaterial>// inverse

    constructor() {
        super()
		this.AssociatedTo = new Array<IfcRelAssociatesMaterial>()

    }
}