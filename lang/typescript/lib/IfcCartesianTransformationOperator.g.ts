
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDirection} from "./IfcDirection"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcReal} from "./IfcReal"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D"
import {IfcCartesianTransformationOperator3D} from "./IfcCartesianTransformationOperator3D"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator.htm
export abstract class IfcCartesianTransformationOperator extends IfcGeometricRepresentationItem {
	Axis1 : IfcDirection// optional
	Axis2 : IfcDirection// optional
	LocalOrigin : IfcCartesianPoint
	Scale : IfcReal// optional

    get Scl() : IfcReal{throw "Derived property logic has been implemented for Scl."} // derived

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(localOrigin : IfcCartesianPoint) {
        super()

		this.LocalOrigin = localOrigin

    }
}