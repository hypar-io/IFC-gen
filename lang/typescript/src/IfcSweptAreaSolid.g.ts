
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcSolidModel} from "./IfcSolidModel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptareasolid.htm
 */
export abstract class IfcSweptAreaSolid extends IfcSolidModel {
	SweptArea : IfcProfileDef
	Position : IfcAxis2Placement3D // optional

    constructor(sweptArea : IfcProfileDef) {
        super()
		this.SweptArea = sweptArea

    }
}