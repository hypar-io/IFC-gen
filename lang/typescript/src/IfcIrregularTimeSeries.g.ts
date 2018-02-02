
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
import {IfcIrregularTimeSeriesValue} from "./IfcIrregularTimeSeriesValue.g"
import {IfcTimeSeries} from "./IfcTimeSeries.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcirregulartimeseries.htm
 */
export class IfcIrregularTimeSeries extends IfcTimeSeries {
	Values : Array<IfcIrregularTimeSeriesValue>

    constructor(name : IfcLabel, startTime : IfcDateTime, endTime : IfcDateTime, timeSeriesDataType : IfcTimeSeriesDataTypeEnum, dataOrigin : IfcDataOriginEnum, values : Array<IfcIrregularTimeSeriesValue>) {
        super(name,startTime,endTime,timeSeriesDataType,dataOrigin)

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
		parameters.push(this.Values != null ? BaseIfc.toStepValue(this.Values) : "$");

        return parameters.join();
    }
}