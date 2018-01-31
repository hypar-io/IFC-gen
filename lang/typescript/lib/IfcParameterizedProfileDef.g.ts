
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAsymmetricIShapeProfileDef} from "./IfcAsymmetricIShapeProfileDef.g"
import {IfcCShapeProfileDef} from "./IfcCShapeProfileDef.g"
import {IfcCircleProfileDef} from "./IfcCircleProfileDef.g"
import {IfcEllipseProfileDef} from "./IfcEllipseProfileDef.g"
import {IfcIShapeProfileDef} from "./IfcIShapeProfileDef.g"
import {IfcLShapeProfileDef} from "./IfcLShapeProfileDef.g"
import {IfcRectangleProfileDef} from "./IfcRectangleProfileDef.g"
import {IfcTShapeProfileDef} from "./IfcTShapeProfileDef.g"
import {IfcTrapeziumProfileDef} from "./IfcTrapeziumProfileDef.g"
import {IfcUShapeProfileDef} from "./IfcUShapeProfileDef.g"
import {IfcZShapeProfileDef} from "./IfcZShapeProfileDef.g"
import {IfcProfileDef} from "./IfcProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcparameterizedprofiledef.htm
export abstract class IfcParameterizedProfileDef extends IfcProfileDef {
	Position : IfcAxis2Placement2D// optional

    constructor(profileType : IfcProfileTypeEnum) {
        super(profileType)

    }
}