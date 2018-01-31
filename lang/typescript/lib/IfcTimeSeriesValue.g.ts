
import {BaseIfc} from "./BaseIfc"
import {IfcValue} from "./IfcValue"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseriesvalue.htm
export class IfcTimeSeriesValue extends BaseIfc {
	ListValues : Array<IfcValue>

    constructor(listValues : Array<IfcValue>) {
        super()

		this.ListValues = listValues

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ListValues != null ? this.toStepValue(this.ListValues) : "$");

        return parameters.join();
    }
}