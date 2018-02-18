
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourSpecification} from "./IfcColourSpecification.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"
import {IfcExternallyDefinedHatchStyle} from "./IfcExternallyDefinedHatchStyle.g"
import {IfcFillAreaStyleHatching} from "./IfcFillAreaStyleHatching.g"
import {IfcFillAreaStyleTiles} from "./IfcFillAreaStyleTiles.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyle.htm
 */
export class IfcFillAreaStyle extends IfcPresentationStyle {
	FillStyles : Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles>
	ModelorDraughting : IfcBoolean // optional

    constructor(fillStyles : Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles>) {
        super()

		this.FillStyles = fillStyles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.FillStyles))
		parameters.push(BaseIfc.toStepValue(this.ModelorDraughting))

        return parameters.join();
    }
}