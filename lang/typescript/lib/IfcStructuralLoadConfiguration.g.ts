
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcStructuralLoad} from "./IfcStructuralLoad"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadconfiguration.htm
export class IfcStructuralLoadConfiguration extends IfcStructuralLoad {
	Values : Array<IfcStructuralLoadOrResult>
	Locations : Array<Array<IfcLengthMeasure>>// optional

    constructor(values : Array<IfcStructuralLoadOrResult>) {
        super()
		this.Locations = new Array<Array<IfcLengthMeasure>>()

		this.Values = values

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Values != null ? this.toStepValue(this.Values) : "$");
		parameters.push(this.Locations != null ? this.toStepValue(this.Locations) : "$");

        return parameters.join();
    }
}