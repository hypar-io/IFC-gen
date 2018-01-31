
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcColourSpecification} from "./IfcColourSpecification"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgb.htm
export class IfcColourRgb extends IfcColourSpecification {
	Red : IfcNormalisedRatioMeasure
	Green : IfcNormalisedRatioMeasure
	Blue : IfcNormalisedRatioMeasure

    constructor(red : IfcNormalisedRatioMeasure, green : IfcNormalisedRatioMeasure, blue : IfcNormalisedRatioMeasure) {
        super()

		this.Red = red
		this.Green = green
		this.Blue = blue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Red != null ? this.toStepValue(this.Red) : "$");
		parameters.push(this.Green != null ? this.toStepValue(this.Green) : "$");
		parameters.push(this.Blue != null ? this.toStepValue(this.Blue) : "$");

        return parameters.join();
    }
}