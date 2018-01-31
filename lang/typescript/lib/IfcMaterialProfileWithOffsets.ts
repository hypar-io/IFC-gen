
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMaterial} from "./IfcMaterial"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcInteger} from "./IfcInteger"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcMaterialProfile} from "./IfcMaterialProfile"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilewithoffsets.htm
export class IfcMaterialProfileWithOffsets extends IfcMaterialProfile {
	OffsetValues : Array<IfcLengthMeasure>

    constructor(profile : IfcProfileDef, offsetValues : Array<IfcLengthMeasure>) {
        super(profile)

		this.OffsetValues = offsetValues

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Material != null ? this.toStepValue(this.Material) : "$");
		parameters.push(this.Profile != null ? this.toStepValue(this.Profile) : "$");
		parameters.push(this.Priority != null ? this.toStepValue(this.Priority) : "$");
		parameters.push(this.Category != null ? this.toStepValue(this.Category) : "$");
		parameters.push(this.OffsetValues != null ? this.toStepValue(this.OffsetValues) : "$");

        return parameters.join();
    }
}