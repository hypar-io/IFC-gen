
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectedcrs.htm
 */
export class IfcProjectedCRS extends IfcCoordinateReferenceSystem {
	MapProjection : IfcIdentifier // optional
	MapZone : IfcIdentifier // optional
	MapUnit : IfcNamedUnit // optional

    constructor(name : IfcLabel) {
        super(name)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.GeodeticDatum))
		parameters.push(BaseIfc.toStepValue(this.VerticalDatum))
		parameters.push(BaseIfc.toStepValue(this.MapProjection))
		parameters.push(BaseIfc.toStepValue(this.MapZone))
		parameters.push(BaseIfc.toStepValue(this.MapUnit))

        return parameters.join();
    }
}