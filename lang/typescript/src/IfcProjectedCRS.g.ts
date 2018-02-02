
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.GeodeticDatum != null ? BaseIfc.toStepValue(this.GeodeticDatum) : "$");
		parameters.push(this.VerticalDatum != null ? BaseIfc.toStepValue(this.VerticalDatum) : "$");
		parameters.push(this.MapProjection != null ? BaseIfc.toStepValue(this.MapProjection) : "$");
		parameters.push(this.MapZone != null ? BaseIfc.toStepValue(this.MapZone) : "$");
		parameters.push(this.MapUnit != null ? BaseIfc.toStepValue(this.MapUnit) : "$");

        return parameters.join();
    }
}