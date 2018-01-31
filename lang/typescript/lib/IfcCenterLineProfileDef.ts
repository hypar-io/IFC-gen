
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcBoundedCurve} from "./IfcBoundedCurve"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcArbitraryOpenProfileDef} from "./IfcArbitraryOpenProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccenterlineprofiledef.htm
export class IfcCenterLineProfileDef extends IfcArbitraryOpenProfileDef {
	Thickness : IfcPositiveLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, curve : IfcBoundedCurve, thickness : IfcPositiveLengthMeasure) {
        super(profileType,curve)

		this.Thickness = thickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Curve != null ? this.toStepValue(this.Curve) : "$");
		parameters.push(this.Thickness != null ? this.toStepValue(this.Thickness) : "$");

        return parameters.join();
    }
}