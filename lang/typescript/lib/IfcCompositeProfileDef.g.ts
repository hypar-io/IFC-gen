
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcProfileDef} from "./IfcProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositeprofiledef.htm
export class IfcCompositeProfileDef extends IfcProfileDef {
	Profiles : Array<IfcProfileDef>
	Label : IfcLabel// optional

    constructor(profileType : IfcProfileTypeEnum, profiles : Array<IfcProfileDef>) {
        super(profileType)

		this.Profiles = profiles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Profiles != null ? this.toStepValue(this.Profiles) : "$");
		parameters.push(this.Label != null ? this.toStepValue(this.Label) : "$");

        return parameters.join();
    }
}