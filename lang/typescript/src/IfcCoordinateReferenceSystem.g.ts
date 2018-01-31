
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation.g"
import {IfcProjectedCRS} from "./IfcProjectedCRS.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinatereferencesystem.htm
export abstract class IfcCoordinateReferenceSystem extends BaseIfc {
	Name : IfcLabel
	Description : IfcText// optional
	GeodeticDatum : IfcIdentifier// optional
	VerticalDatum : IfcIdentifier// optional
	HasCoordinateOperation : Array<IfcCoordinateOperation>// inverse

    constructor(name : IfcLabel) {
        super()
		this.HasCoordinateOperation = new Array<IfcCoordinateOperation>()

		this.Name = name

    }
}