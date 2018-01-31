
import {BaseIfc} from "./BaseIfc"
import {IfcDateTime} from "./IfcDateTime"
import {IfcValue} from "./IfcValue"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcirregulartimeseriesvalue.htm
export class IfcIrregularTimeSeriesValue extends BaseIfc {
	TimeStamp : IfcDateTime
	ListValues : Array<IfcValue>

    constructor(timeStamp : IfcDateTime, listValues : Array<IfcValue>) {
        super()

		this.TimeStamp = timeStamp
		this.ListValues = listValues

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.TimeStamp != null ? this.toStepValue(this.TimeStamp) : "$");
		parameters.push(this.ListValues != null ? this.toStepValue(this.ListValues) : "$");

        return parameters.join();
    }
}