
import {BaseIfc} from "./BaseIfc"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertexlist.htm
export class IfcTextureVertexList extends IfcPresentationItem {
	TexCoordsList : Array<Array<IfcParameterValue>>

    constructor(texCoordsList : Array<Array<IfcParameterValue>>) {
        super()

		this.TexCoordsList = texCoordsList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.TexCoordsList != null ? this.toStepValue(this.TexCoordsList) : "$");

        return parameters.join();
    }
}