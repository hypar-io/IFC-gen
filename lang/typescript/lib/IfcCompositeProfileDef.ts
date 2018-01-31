
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcProfileDef} from "./IfcProfileDef"

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