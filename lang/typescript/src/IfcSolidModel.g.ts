
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCsgSolid} from "./IfcCsgSolid.g"
import {IfcManifoldSolidBrep} from "./IfcManifoldSolidBrep.g"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid.g"
import {IfcSweptDiskSolid} from "./IfcSweptDiskSolid.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsolidmodel.htm
export abstract class IfcSolidModel extends IfcGeometricRepresentationItem {

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor() {
        super()

    }
}