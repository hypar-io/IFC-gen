
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCsgSolid} from "./IfcCsgSolid"
import {IfcManifoldSolidBrep} from "./IfcManifoldSolidBrep"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid"
import {IfcSweptDiskSolid} from "./IfcSweptDiskSolid"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsolidmodel.htm
export abstract class IfcSolidModel extends IfcGeometricRepresentationItem {

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor() {
        super()

    }
}