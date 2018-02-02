
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofiledef.htm
 */
export class IfcProfileDef extends BaseIfc {
	ProfileType : IfcProfileTypeEnum
	ProfileName : IfcLabel // optional
	HasExternalReference : Array<IfcExternalReferenceRelationship> // inverse
	HasProperties : Array<IfcProfileProperties> // inverse

    constructor(profileType : IfcProfileTypeEnum) {
        super()
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()
		this.HasProperties = new Array<IfcProfileProperties>()

		this.ProfileType = profileType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? BaseIfc.toStepValue(this.ProfileName) : "$");

        return parameters.join();
    }
}