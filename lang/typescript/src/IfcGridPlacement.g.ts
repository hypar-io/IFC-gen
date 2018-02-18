
import {BaseIfc} from "./BaseIfc"
import {IfcProduct} from "./IfcProduct.g"
import {IfcLocalPlacement} from "./IfcLocalPlacement.g"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridplacement.htm
 */
export class IfcGridPlacement extends IfcObjectPlacement {
	PlacementLocation : IfcVirtualGridIntersection
	PlacementRefDirection : IfcDirection|IfcVirtualGridIntersection // optional

    constructor(placementLocation : IfcVirtualGridIntersection) {
        super()
		this.PlacementLocation = placementLocation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.PlacementLocation))
		parameters.push(BaseIfc.toStepValue(this.PlacementRefDirection))

        return parameters.join();
    }
}