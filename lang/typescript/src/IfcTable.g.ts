
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcTableRow} from "./IfcTableRow.g"
import {IfcTableColumn} from "./IfcTableColumn.g"
import {IfcInteger} from "./IfcInteger.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctable.htm
 */
export class IfcTable extends BaseIfc {
	Name : IfcLabel // optional
	Rows : Array<IfcTableRow> // optional
	Columns : Array<IfcTableColumn> // optional

    get NumberOfCellsInRow() : IfcInteger{throw "Derived property logic has not been implemented for NumberOfCellsInRow."} // derived
    set NumberOfCellsInRow(value : IfcInteger){super.NumberOfCellsInRow = value}

    get NumberOfHeadings() : IfcInteger{throw "Derived property logic has not been implemented for NumberOfHeadings."} // derived
    set NumberOfHeadings(value : IfcInteger){super.NumberOfHeadings = value}

    get NumberOfDataRows() : IfcInteger{throw "Derived property logic has not been implemented for NumberOfDataRows."} // derived
    set NumberOfDataRows(value : IfcInteger){super.NumberOfDataRows = value}

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Rows))
		parameters.push(BaseIfc.toStepValue(this.Columns))

        return parameters.join();
    }
}