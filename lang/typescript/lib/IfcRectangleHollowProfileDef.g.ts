
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcRectangleProfileDef} from "./IfcRectangleProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectanglehollowprofiledef.htm
export class IfcRectangleHollowProfileDef extends IfcRectangleProfileDef {
	WallThickness : IfcPositiveLengthMeasure
	InnerFilletRadius : IfcNonNegativeLengthMeasure// optional
	OuterFilletRadius : IfcNonNegativeLengthMeasure// optional

    constructor(profileType : IfcProfileTypeEnum, xDim : IfcPositiveLengthMeasure, yDim : IfcPositiveLengthMeasure, wallThickness : IfcPositiveLengthMeasure) {
        super(profileType,xDim,yDim)

		this.WallThickness = wallThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.XDim != null ? this.toStepValue(this.XDim) : "$");
		parameters.push(this.YDim != null ? this.toStepValue(this.YDim) : "$");
		parameters.push(this.WallThickness != null ? this.toStepValue(this.WallThickness) : "$");
		parameters.push(this.InnerFilletRadius != null ? this.toStepValue(this.InnerFilletRadius) : "$");
		parameters.push(this.OuterFilletRadius != null ? this.toStepValue(this.OuterFilletRadius) : "$");

        return parameters.join();
    }
}