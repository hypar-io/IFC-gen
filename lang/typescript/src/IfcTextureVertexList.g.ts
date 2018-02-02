
import {BaseIfc} from "./BaseIfc"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertexlist.htm
 */
export class IfcTextureVertexList extends IfcPresentationItem {
	TexCoordsList : Array<Array<IfcParameterValue>>

    constructor(texCoordsList : Array<Array<IfcParameterValue>>) {
        super()

		this.TexCoordsList = texCoordsList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.TexCoordsList != null ? BaseIfc.toStepValue(this.TexCoordsList) : "$");

        return parameters.join();
    }
}