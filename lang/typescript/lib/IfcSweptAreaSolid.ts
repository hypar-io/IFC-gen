
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcExtrudedAreaSolid} from "./IfcExtrudedAreaSolid"
import {IfcFixedReferenceSweptAreaSolid} from "./IfcFixedReferenceSweptAreaSolid"
import {IfcRevolvedAreaSolid} from "./IfcRevolvedAreaSolid"
import {IfcSurfaceCurveSweptAreaSolid} from "./IfcSurfaceCurveSweptAreaSolid"
import {IfcSolidModel} from "./IfcSolidModel"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptareasolid.htm
export abstract class IfcSweptAreaSolid extends IfcSolidModel {
	SweptArea : IfcProfileDef
	Position : IfcAxis2Placement3D// optional

    constructor(sweptArea : IfcProfileDef) {
        super()

		this.SweptArea = sweptArea

    }
}