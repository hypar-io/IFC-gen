
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
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.StartTime))
		parameters.push(BaseIfc.toStepValue(this.EndTime))
		parameters.push(BaseIfc.toStepValue(this.TimeSeriesDataType))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.TimeStep))
		parameters.push(BaseIfc.toStepValue(this.Values))

        return parameters.join();
    }
}