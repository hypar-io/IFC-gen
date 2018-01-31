
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D"
import {IfcAsymmetricIShapeProfileDef} from "./IfcAsymmetricIShapeProfileDef"
import {IfcCShapeProfileDef} from "./IfcCShapeProfileDef"
import {IfcCircleProfileDef} from "./IfcCircleProfileDef"
import {IfcEllipseProfileDef} from "./IfcEllipseProfileDef"
import {IfcIShapeProfileDef} from "./IfcIShapeProfileDef"
import {IfcLShapeProfileDef} from "./IfcLShapeProfileDef"
import {IfcRectangleProfileDef} from "./IfcRectangleProfileDef"
import {IfcTShapeProfileDef} from "./IfcTShapeProfileDef"
import {IfcTrapeziumProfileDef} from "./IfcTrapeziumProfileDef"
import {IfcUShapeProfileDef} from "./IfcUShapeProfileDef"
import {IfcZShapeProfileDef} from "./IfcZShapeProfileDef"
import {IfcProfileDef} from "./IfcProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcparameterizedprofiledef.htm
export abstract class IfcParameterizedProfileDef extends IfcProfileDef {
	Position : IfcAxis2Placement2D// optional

    constructor(profileType : IfcProfileTypeEnum) {
        super(profileType)

    }
}