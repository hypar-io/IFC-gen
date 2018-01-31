
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation"
import {IfcNamedUnit} from "./IfcNamedUnit"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectedcrs.htm
export class IfcProjectedCRS extends IfcCoordinateReferenceSystem {
	MapProjection : IfcIdentifier// optional
	MapZone : IfcIdentifier// optional
	MapUnit : IfcNamedUnit// optional

    constructor(name : IfcLabel) {
        super(name)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.GeodeticDatum != null ? this.toStepValue(this.GeodeticDatum) : "$");
		parameters.push(this.VerticalDatum != null ? this.toStepValue(this.VerticalDatum) : "$");
		parameters.push(this.MapProjection != null ? this.toStepValue(this.MapProjection) : "$");
		parameters.push(this.MapZone != null ? this.toStepValue(this.MapZone) : "$");
		parameters.push(this.MapUnit != null ? this.toStepValue(this.MapUnit) : "$");

        return parameters.join();
    }
}