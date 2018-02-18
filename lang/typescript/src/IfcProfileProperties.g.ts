
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcExtendedProperties} from "./IfcExtendedProperties.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofileproperties.htm
 */
export class IfcProfileProperties extends IfcExtendedProperties {
	ProfileDefinition : IfcProfileDef

    constructor(properties : Array<IfcProperty>, profileDefinition : IfcProfileDef) {
        super(properties)
		this.ProfileDefinition = profileDefinition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Properties))
		parameters.push(BaseIfc.toStepValue(this.ProfileDefinition))

        return parameters.join();
    }
}