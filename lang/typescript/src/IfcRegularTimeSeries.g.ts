
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcTimeSeriesDataTypeEnum} from "./IfcTimeSeriesDataTypeEnum.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcTimeMeasure} from "./IfcTimeMeasure.g"
import {IfcTimeSeriesValue} from "./IfcTimeSeriesValue.g"
import {IfcTimeSeries} from "./IfcTimeSeries.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcregulartimeseries.htm
 */
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.StartTime != null ? BaseIfc.toStepValue(this.StartTime) : "$");
		parameters.push(this.EndTime != null ? BaseIfc.toStepValue(this.EndTime) : "$");
		parameters.push(BaseIfc.toStepValue(this.TimeSeriesDataType));
		parameters.push(BaseIfc.toStepValue(this.DataOrigin));
		parameters.push(this.UserDefinedDataOrigin != null ? BaseIfc.toStepValue(this.UserDefinedDataOrigin) : "$");
		parameters.push(this.Unit != null ? BaseIfc.toStepValue(this.Unit) : "$");
		parameters.push(this.TimeStep != null ? BaseIfc.toStepValue(this.TimeStep) : "$");
		parameters.push(this.Values != null ? BaseIfc.toStepValue(this.Values) : "$");

        return parameters.join();
    }
}