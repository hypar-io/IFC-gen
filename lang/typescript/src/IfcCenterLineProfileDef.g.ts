
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcArbitraryOpenProfileDef} from "./IfcArbitraryOpenProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccenterlineprofiledef.htm
 */
export class IfcCenterLineProfileDef extends IfcArbitraryOpenProfileDef {
	Thickness : IfcPositiveLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, curve : IfcBoundedCurve, thickness : IfcPositiveLengthMeasure) {
        super(profileType,curve)

		this.Thickness = thickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? BaseIfc.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Curve != null ? BaseIfc.toStepValue(this.Curve) : "$");
		parameters.push(this.Thickness != null ? BaseIfc.toStepValue(this.Thickness) : "$");

        return parameters.join();
    }
}