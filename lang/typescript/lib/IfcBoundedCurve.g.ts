
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcBSplineCurve} from "./IfcBSplineCurve.g"
import {IfcCompositeCurve} from "./IfcCompositeCurve.g"
import {IfcIndexedPolyCurve} from "./IfcIndexedPolyCurve.g"
import {IfcPolyline} from "./IfcPolyline.g"
import {IfcTrimmedCurve} from "./IfcTrimmedCurve.g"
import {IfcCurve} from "./IfcCurve.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedcurve.htm
export abstract class IfcBoundedCurve extends IfcCurve {

    constructor() {
        super()

    }
}