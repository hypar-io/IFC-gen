
import {BaseIfc} from "./BaseIfc"
import {IfcConnectionCurveGeometry} from "./IfcConnectionCurveGeometry"
import {IfcConnectionPointGeometry} from "./IfcConnectionPointGeometry"
import {IfcConnectionSurfaceGeometry} from "./IfcConnectionSurfaceGeometry"
import {IfcConnectionVolumeGeometry} from "./IfcConnectionVolumeGeometry"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectiongeometry.htm
export abstract class IfcConnectionGeometry extends BaseIfc {

    constructor() {
        super()

    }
}