
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcFillStyleSelect} from "./IfcFillStyleSelect"
import {IfcBoolean} from "./IfcBoolean"
import {IfcPresentationStyle} from "./IfcPresentationStyle"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyle.htm
export class IfcFillAreaStyle extends IfcPresentationStyle {
	FillStyles : Array<IfcFillStyleSelect>
	ModelorDraughting : IfcBoolean// optional

    constructor(fillStyles : Array<IfcFillStyleSelect>) {
        super()

		this.FillStyles = fillStyles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.FillStyles != null ? this.toStepValue(this.FillStyles) : "$");
		parameters.push(this.ModelorDraughting != null ? this.toStepValue(this.ModelorDraughting) : "$");

        return parameters.join();
    }
}