
import {BaseIfc} from "./BaseIfc"
import {IfcTime} from "./IfcTime"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeperiod.htm
export class IfcTimePeriod extends BaseIfc {
	StartTime : IfcTime
	EndTime : IfcTime

    constructor(startTime : IfcTime, endTime : IfcTime) {
        super()

		this.StartTime = startTime
		this.EndTime = endTime

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.StartTime != null ? this.toStepValue(this.StartTime) : "$");
		parameters.push(this.EndTime != null ? this.toStepValue(this.EndTime) : "$");

        return parameters.join();
    }
}