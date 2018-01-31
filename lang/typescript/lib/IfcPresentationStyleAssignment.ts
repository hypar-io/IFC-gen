
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationStyleSelect} from "./IfcPresentationStyleSelect"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyleassignment.htm
export class IfcPresentationStyleAssignment extends BaseIfc {
	Styles : Array<IfcPresentationStyleSelect>

    constructor(styles : Array<IfcPresentationStyleSelect>) {
        super()

		this.Styles = styles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Styles != null ? this.toStepValue(this.Styles) : "$");

        return parameters.join();
    }
}