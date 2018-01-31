
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcArbitraryClosedProfileDef} from "./IfcArbitraryClosedProfileDef"
import {IfcArbitraryOpenProfileDef} from "./IfcArbitraryOpenProfileDef"
import {IfcCompositeProfileDef} from "./IfcCompositeProfileDef"
import {IfcDerivedProfileDef} from "./IfcDerivedProfileDef"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofiledef.htm
export class IfcProfileDef extends BaseIfc {
	ProfileType : IfcProfileTypeEnum
	ProfileName : IfcLabel// optional
	HasExternalReference : Array<IfcExternalReferenceRelationship>// inverse
	HasProperties : Array<IfcProfileProperties>// inverse

    constructor(profileType : IfcProfileTypeEnum) {
        super()
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()
		this.HasProperties = new Array<IfcProfileProperties>()

		this.ProfileType = profileType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");

        return parameters.join();
    }
}