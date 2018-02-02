
import {BaseIfc} from "./BaseIfc"
import {IfcMaterial} from "./IfcMaterial.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallist.htm
 */
export class IfcMaterialList extends BaseIfc {
	Materials : Array<IfcMaterial>

    constructor(materials : Array<IfcMaterial>) {
        super()

		this.Materials = materials

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Materials != null ? BaseIfc.toStepValue(this.Materials) : "$");

        return parameters.join();
    }
}