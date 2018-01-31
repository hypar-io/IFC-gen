
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcArbitraryClosedProfileDef} from "./IfcArbitraryClosedProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryprofiledefwithvoids.htm
export class IfcArbitraryProfileDefWithVoids extends IfcArbitraryClosedProfileDef {
	InnerCurves : Array<IfcCurve>

    constructor(profileType : IfcProfileTypeEnum, outerCurve : IfcCurve, innerCurves : Array<IfcCurve>) {
        super(profileType,outerCurve)

		this.InnerCurves = innerCurves

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.OuterCurve != null ? this.toStepValue(this.OuterCurve) : "$");
		parameters.push(this.InnerCurves != null ? this.toStepValue(this.InnerCurves) : "$");

        return parameters.join();
    }
}