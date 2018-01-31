
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcTimeSeriesDataTypeEnum} from "./IfcTimeSeriesDataTypeEnum.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcUnit} from "./IfcUnit.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcTimeMeasure} from "./IfcTimeMeasure.g"
import {IfcTimeSeriesValue} from "./IfcTimeSeriesValue.g"
import {IfcTimeSeries} from "./IfcTimeSeries.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcregulartimeseries.htm
export class IfcRegularTimeSeries extends IfcTimeSeries {
	TimeStep : IfcTimeMeasure
	Values : Array<IfcTimeSeriesValue>

    constructor(name : IfcLabel, startTime : IfcDateTime, endTime : IfcDateTime, timeSeriesDataType : IfcTimeSeriesDataTypeEnum, dataOrigin : IfcDataOriginEnum, timeStep : IfcTimeMeasure, values : Array<IfcTimeSeriesValue>) {
        super(name,startTime,endTime,timeSeriesDataType,dataOrigin)

		this.TimeStep = timeStep
		this.Values = values

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.StartTime != null ? this.toStepValue(this.StartTime) : "$");
		parameters.push(this.EndTime != null ? this.toStepValue(this.EndTime) : "$");
		parameters.push(this.toStepValue(this.TimeSeriesDataType));
		parameters.push(this.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? this.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");
		parameters.push(this.TimeStep != null ? this.toStepValue(this.TimeStep) : "$");
		parameters.push(this.Values != null ? this.toStepValue(this.Values) : "$");

        return parameters.join();
    }
}