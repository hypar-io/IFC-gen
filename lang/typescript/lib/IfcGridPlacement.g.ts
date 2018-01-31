
import {BaseIfc} from "./BaseIfc"
import {IfcProduct} from "./IfcProduct.g"
import {IfcLocalPlacement} from "./IfcLocalPlacement.g"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection.g"
import {IfcGridPlacementDirectionSelect} from "./IfcGridPlacementDirectionSelect.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridplacement.htm
export class IfcGridPlacement extends IfcObjectPlacement {
	PlacementLocation : IfcVirtualGridIntersection
	PlacementRefDirection : IfcGridPlacementDirectionSelect// optional

    constructor(placementLocation : IfcVirtualGridIntersection) {
        super()

		this.PlacementLocation = placementLocation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.PlacementLocation != null ? this.toStepValue(this.PlacementLocation) : "$");
		parameters.push(this.PlacementRefDirection != null ? this.toStepValue(this.PlacementRefDirection) : "$");

        return parameters.join();
    }
}