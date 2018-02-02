
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMaterial} from "./IfcMaterial.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcMaterialProfile} from "./IfcMaterialProfile.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilewithoffsets.htm
 */
export class IfcMaterialProfileWithOffsets extends IfcMaterialProfile {
	OffsetValues : Array<IfcLengthMeasure>

    constructor(profile : IfcProfileDef, offsetValues : Array<IfcLengthMeasure>) {
        super(profile)

		this.OffsetValues = offsetValues

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.Material != null ? BaseIfc.toStepValue(this.Material) : "$");
		parameters.push(this.Profile != null ? BaseIfc.toStepValue(this.Profile) : "$");
		parameters.push(this.Priority != null ? BaseIfc.toStepValue(this.Priority) : "$");
		parameters.push(this.Category != null ? BaseIfc.toStepValue(this.Category) : "$");
		parameters.push(this.OffsetValues != null ? BaseIfc.toStepValue(this.OffsetValues) : "$");

        return parameters.join();
    }
}