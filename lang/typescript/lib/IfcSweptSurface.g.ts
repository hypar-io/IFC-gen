
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcSurfaceOfLinearExtrusion} from "./IfcSurfaceOfLinearExtrusion"
import {IfcSurfaceOfRevolution} from "./IfcSurfaceOfRevolution"
import {IfcSurface} from "./IfcSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptsurface.htm
export abstract class IfcSweptSurface extends IfcSurface {
	SweptCurve : IfcProfileDef
	Position : IfcAxis2Placement3D// optional

    constructor(sweptCurve : IfcProfileDef) {
        super()

		this.SweptCurve = sweptCurve

    }
}