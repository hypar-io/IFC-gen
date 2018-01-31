
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcClosedShell} from "./IfcClosedShell"
import {IfcAdvancedBrep} from "./IfcAdvancedBrep"
import {IfcFacetedBrep} from "./IfcFacetedBrep"
import {IfcSolidModel} from "./IfcSolidModel"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmanifoldsolidbrep.htm
export abstract class IfcManifoldSolidBrep extends IfcSolidModel {
	Outer : IfcClosedShell

    constructor(outer : IfcClosedShell) {
        super()

		this.Outer = outer

    }
}