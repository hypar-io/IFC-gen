
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation"
import {IfcProjectedCRS} from "./IfcProjectedCRS"

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