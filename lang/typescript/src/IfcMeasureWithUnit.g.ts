
import {BaseIfc} from "./BaseIfc"
import {IfcValue} from "./IfcValue.g"
import {IfcUnit} from "./IfcUnit.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmeasurewithunit.htm
export class IfcMeasureWithUnit extends BaseIfc {
	ValueComponent : IfcValue
	UnitComponent : IfcUnit

    constructor(valueComponent : IfcValue, unitComponent : IfcUnit) {
        super()

		this.ValueComponent = valueComponent
		this.UnitComponent = unitComponent

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ValueComponent != null ? this.toStepValue(this.ValueComponent) : "$");
		parameters.push(this.UnitComponent != null ? this.toStepValue(this.UnitComponent) : "$");

        return parameters.join();
    }
}