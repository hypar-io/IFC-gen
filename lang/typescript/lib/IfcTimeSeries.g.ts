
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcDateTime} from "./IfcDateTime"
import {IfcTimeSeriesDataTypeEnum} from "./IfcTimeSeriesDataTypeEnum"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum"
import {IfcUnit} from "./IfcUnit"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIrregularTimeSeries} from "./IfcIrregularTimeSeries"
import {IfcRegularTimeSeries} from "./IfcRegularTimeSeries"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseries.htm
export abstract class IfcTimeSeries extends BaseIfc {
	Name : IfcLabel
	Description : IfcText// optional
	StartTime : IfcDateTime
	EndTime : IfcDateTime
	TimeSeriesDataType : IfcTimeSeriesDataTypeEnum
	DataOrigin : IfcDataOriginEnum
	UserDefinedDataOrigin : IfcLabel// optional
	Unit : IfcUnit// optional
	HasExternalReference : Array<IfcExternalReferenceRelationship>// inverse

    constructor(name : IfcLabel, startTime : IfcDateTime, endTime : IfcDateTime, timeSeriesDataType : IfcTimeSeriesDataTypeEnum, dataOrigin : IfcDataOriginEnum) {
        super()
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()

		this.Name = name
		this.StartTime = startTime
		this.EndTime = endTime
		this.TimeSeriesDataType = timeSeriesDataType
		this.DataOrigin = dataOrigin

    }
}