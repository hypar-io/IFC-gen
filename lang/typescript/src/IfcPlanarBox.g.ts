
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcPlanarExtent} from "./IfcPlanarExtent.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarbox.htm
 */
export class IfcPlanarBox extends IfcPlanarExtent {
	Placement : IfcAxis2Placement2D|IfcAxis2Placement3D

    constructor(sizeInX : IfcLengthMeasure, sizeInY : IfcLengthMeasure, placement : IfcAxis2Placement2D|IfcAxis2Placement3D) {
        super(sizeInX,sizeInY)

		this.Placement = placement

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.SizeInX))
		parameters.push(BaseIfc.toStepValue(this.SizeInY))
		parameters.push(BaseIfc.toStepValue(this.Placement))

            return parameters.join();
        }
}