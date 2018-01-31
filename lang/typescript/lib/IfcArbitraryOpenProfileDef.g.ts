
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcBoundedCurve} from "./IfcBoundedCurve"
import {IfcCenterLineProfileDef} from "./IfcCenterLineProfileDef"
import {IfcProfileDef} from "./IfcProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryopenprofiledef.htm
export class IfcArbitraryOpenProfileDef extends IfcProfileDef {
	Curve : IfcBoundedCurve

    constructor(profileType : IfcProfileTypeEnum, curve : IfcBoundedCurve) {
        super(profileType)

		this.Curve = curve

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Curve != null ? this.toStepValue(this.Curve) : "$");

        return parameters.join();
    }
}