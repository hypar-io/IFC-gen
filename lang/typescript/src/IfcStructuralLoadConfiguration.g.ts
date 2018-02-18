
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcStructuralLoad} from "./IfcStructuralLoad.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadconfiguration.htm
 */
export class IfcStructuralLoadConfiguration extends IfcStructuralLoad {
	Values : Array<IfcStructuralLoadOrResult>
	Locations : Array<Array<IfcLengthMeasure>> // optional

    constructor(values : Array<IfcStructuralLoadOrResult>) {
        super()
		this.Locations = new Array<Array<IfcLengthMeasure>>()

		this.Values = values

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Values))
		parameters.push(BaseIfc.toStepValue(this.Locations))

        return parameters.join();
    }
}