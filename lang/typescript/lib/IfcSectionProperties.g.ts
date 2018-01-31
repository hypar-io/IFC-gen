
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcSectionTypeEnum} from "./IfcSectionTypeEnum"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionproperties.htm
export class IfcSectionProperties extends IfcPreDefinedProperties {
	SectionType : IfcSectionTypeEnum
	StartProfile : IfcProfileDef
	EndProfile : IfcProfileDef// optional

    constructor(sectionType : IfcSectionTypeEnum, startProfile : IfcProfileDef) {
        super()

		this.SectionType = sectionType
		this.StartProfile = startProfile

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.SectionType));
		parameters.push(this.StartProfile != null ? this.toStepValue(this.StartProfile) : "$");
		parameters.push(this.EndProfile != null ? this.toStepValue(this.EndProfile) : "$");

        return parameters.join();
    }
}