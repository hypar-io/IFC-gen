
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccshapeprofiledef.htm
export class IfcCShapeProfileDef extends IfcParameterizedProfileDef {
	Depth : IfcPositiveLengthMeasure
	Width : IfcPositiveLengthMeasure
	WallThickness : IfcPositiveLengthMeasure
	Girth : IfcPositiveLengthMeasure
	InternalFilletRadius : IfcNonNegativeLengthMeasure// optional

    constructor(profileType : IfcProfileTypeEnum, depth : IfcPositiveLengthMeasure, width : IfcPositiveLengthMeasure, wallThickness : IfcPositiveLengthMeasure, girth : IfcPositiveLengthMeasure) {
        super(profileType)

		this.Depth = depth
		this.Width = width
		this.WallThickness = wallThickness
		this.Girth = girth

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Depth != null ? this.toStepValue(this.Depth) : "$");
		parameters.push(this.Width != null ? this.toStepValue(this.Width) : "$");
		parameters.push(this.WallThickness != null ? this.toStepValue(this.WallThickness) : "$");
		parameters.push(this.Girth != null ? this.toStepValue(this.Girth) : "$");
		parameters.push(this.InternalFilletRadius != null ? this.toStepValue(this.InternalFilletRadius) : "$");

        return parameters.join();
    }
}