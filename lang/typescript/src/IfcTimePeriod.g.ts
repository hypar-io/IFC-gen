
import {BaseIfc} from "./BaseIfc"
import {IfcTime} from "./IfcTime.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeperiod.htm
 */
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
		parameters.push(this.StartTime != null ? BaseIfc.toStepValue(this.StartTime) : "$");
		parameters.push(this.EndTime != null ? BaseIfc.toStepValue(this.EndTime) : "$");

        return parameters.join();
    }
}