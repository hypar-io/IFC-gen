
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

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseries.htm
 */
export abstract class IfcTimeSeries extends BaseIfc {
	Name : IfcLabel
	Description : IfcText // optional
	StartTime : IfcDateTime
	EndTime : IfcDateTime
	TimeSeriesDataType : IfcTimeSeriesDataTypeEnum
	DataOrigin : IfcDataOriginEnum
	UserDefinedDataOrigin : IfcLabel // optional
	Unit : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit // optional
	HasExternalReference : Array<IfcExternalReferenceRelationship> // inverse

    constructor(name : IfcLabel, startTime : IfcDateTime, endTime : IfcDateTime, timeSeriesDataType : IfcTimeSeriesDataTypeEnum, dataOrigin : IfcDataOriginEnum) {
        super()
		this.Name = name
		this.StartTime = startTime
		this.EndTime = endTime
		this.TimeSeriesDataType = timeSeriesDataType
		this.DataOrigin = dataOrigin

    }
}