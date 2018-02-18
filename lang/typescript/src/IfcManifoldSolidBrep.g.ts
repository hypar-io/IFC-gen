
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcSolidModel} from "./IfcSolidModel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmanifoldsolidbrep.htm
 */
export abstract class IfcManifoldSolidBrep extends IfcSolidModel {
	Outer : IfcClosedShell

    constructor(outer : IfcClosedShell) {
        super()
		this.Outer = outer

    }
}