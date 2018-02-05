
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"
import {IfcProfileDef} from "./IfcProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryopenprofiledef.htm
 */
export class IfcArbitraryOpenProfileDef extends IfcProfileDef {
	Curve : IfcBoundedCurve

    constructor(profileType : IfcProfileTypeEnum, curve : IfcBoundedCurve) {
        super(profileType)

		this.Curve = curve

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Curve))

            return parameters.join();
        }
}