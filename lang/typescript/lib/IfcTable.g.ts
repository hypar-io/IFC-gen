
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcTableRow} from "./IfcTableRow.g"
import {IfcTableColumn} from "./IfcTableColumn.g"
import {IfcInteger} from "./IfcInteger.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctable.htm
export class IfcTable extends BaseIfc {
	Name : IfcLabel// optional
	Rows : Array<IfcTableRow>// optional
	Columns : Array<IfcTableColumn>// optional

    get NumberOfCellsInRow() : IfcInteger{throw "Derived property logic has been implemented for NumberOfCellsInRow."} // derived

    get NumberOfHeadings() : IfcInteger{throw "Derived property logic has been implemented for NumberOfHeadings."} // derived

    get NumberOfDataRows() : IfcInteger{throw "Derived property logic has been implemented for NumberOfDataRows."} // derived

    constructor() {
        super()
		this.Rows = new Array<IfcTableRow>()
		this.Columns = new Array<IfcTableColumn>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Rows != null ? this.toStepValue(this.Rows) : "$");
		parameters.push(this.Columns != null ? this.toStepValue(this.Columns) : "$");

        return parameters.join();
    }
}