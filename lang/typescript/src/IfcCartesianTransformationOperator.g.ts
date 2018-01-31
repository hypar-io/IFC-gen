
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcCartesianTransformationOperator3D} from "./IfcCartesianTransformationOperator3D.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

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