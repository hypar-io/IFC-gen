
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcArbitraryProfileDefWithVoids} from "./IfcArbitraryProfileDefWithVoids.g"
import {IfcProfileDef} from "./IfcProfileDef.g"

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