
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcMaterialLayerSetUsage} from "./IfcMaterialLayerSetUsage"
import {IfcMaterialProfileSetUsage} from "./IfcMaterialProfileSetUsage"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialusagedefinition.htm
export abstract class IfcMaterialUsageDefinition extends BaseIfc {
	AssociatedTo : Array<IfcRelAssociatesMaterial>// inverse

    constructor() {
        super()
		this.AssociatedTo = new Array<IfcRelAssociatesMaterial>()

    }
}