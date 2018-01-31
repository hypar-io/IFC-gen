
import {BaseIfc} from "./BaseIfc"
import {IfcConnectionCurveGeometry} from "./IfcConnectionCurveGeometry.g"
import {IfcConnectionPointGeometry} from "./IfcConnectionPointGeometry.g"
import {IfcConnectionSurfaceGeometry} from "./IfcConnectionSurfaceGeometry.g"
import {IfcConnectionVolumeGeometry} from "./IfcConnectionVolumeGeometry.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectiongeometry.htm
export abstract class IfcConnectionGeometry extends BaseIfc {

    constructor() {
        super()

    }
}