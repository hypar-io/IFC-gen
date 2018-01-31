
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcBSplineCurve} from "./IfcBSplineCurve"
import {IfcCompositeCurve} from "./IfcCompositeCurve"
import {IfcIndexedPolyCurve} from "./IfcIndexedPolyCurve"
import {IfcPolyline} from "./IfcPolyline"
import {IfcTrimmedCurve} from "./IfcTrimmedCurve"
import {IfcCurve} from "./IfcCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedcurve.htm
export abstract class IfcBoundedCurve extends IfcCurve {

    constructor() {
        super()

    }
}