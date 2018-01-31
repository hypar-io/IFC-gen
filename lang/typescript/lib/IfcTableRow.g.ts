
import {BaseIfc} from "./BaseIfc"
import {IfcValue} from "./IfcValue.g"
import {IfcBoolean} from "./IfcBoolean.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctablerow.htm
export class IfcTableRow extends BaseIfc {
	RowCells : Array<IfcValue>// optional
	IsHeading : IfcBoolean// optional

    constructor() {
        super()
		this.RowCells = new Array<IfcValue>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.RowCells != null ? this.toStepValue(this.RowCells) : "$");
		parameters.push(this.IsHeading != null ? this.toStepValue(this.IsHeading) : "$");

        return parameters.join();
    }
}