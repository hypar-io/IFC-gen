
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccshapeprofiledef.htm
 */
export class IfcCShapeProfileDef extends IfcParameterizedProfileDef {
	Depth : IfcPositiveLengthMeasure
	Width : IfcPositiveLengthMeasure
	WallThickness : IfcPositiveLengthMeasure
	Girth : IfcPositiveLengthMeasure
	InternalFilletRadius : IfcNonNegativeLengthMeasure // optional

    constructor(profileType : IfcProfileTypeEnum, depth : IfcPositiveLengthMeasure, width : IfcPositiveLengthMeasure, wallThickness : IfcPositiveLengthMeasure, girth : IfcPositiveLengthMeasure) {
        super(profileType)
		this.Depth = depth
		this.Width = width
		this.WallThickness = wallThickness
		this.Girth = girth

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Depth))
		parameters.push(BaseIfc.toStepValue(this.Width))
		parameters.push(BaseIfc.toStepValue(this.WallThickness))
		parameters.push(BaseIfc.toStepValue(this.Girth))
		parameters.push(BaseIfc.toStepValue(this.InternalFilletRadius))

        return parameters.join();
    }
}