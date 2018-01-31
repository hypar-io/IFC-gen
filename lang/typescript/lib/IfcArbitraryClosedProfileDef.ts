
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcCurve} from "./IfcCurve"
import {IfcArbitraryProfileDefWithVoids} from "./IfcArbitraryProfileDefWithVoids"
import {IfcProfileDef} from "./IfcProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryclosedprofiledef.htm
export class IfcArbitraryClosedProfileDef extends IfcProfileDef {
	OuterCurve : IfcCurve

    constructor(profileType : IfcProfileTypeEnum, outerCurve : IfcCurve) {
        super(profileType)

		this.OuterCurve = outerCurve

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.OuterCurve != null ? this.toStepValue(this.OuterCurve) : "$");

        return parameters.join();
    }
}