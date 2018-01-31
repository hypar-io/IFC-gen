
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcReinforcingBarRoleEnum} from "./IfcReinforcingBarRoleEnum.g"
import {IfcSectionProperties} from "./IfcSectionProperties.g"
import {IfcReinforcementBarProperties} from "./IfcReinforcementBarProperties.g"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionreinforcementproperties.htm
export class IfcSectionReinforcementProperties extends IfcPreDefinedProperties {
	LongitudinalStartPosition : IfcLengthMeasure
	LongitudinalEndPosition : IfcLengthMeasure
	TransversePosition : IfcLengthMeasure// optional
	ReinforcementRole : IfcReinforcingBarRoleEnum
	SectionDefinition : IfcSectionProperties
	CrossSectionReinforcementDefinitions : Array<IfcReinforcementBarProperties>

    constructor(longitudinalStartPosition : IfcLengthMeasure, longitudinalEndPosition : IfcLengthMeasure, reinforcementRole : IfcReinforcingBarRoleEnum, sectionDefinition : IfcSectionProperties, crossSectionReinforcementDefinitions : Array<IfcReinforcementBarProperties>) {
        super()

		this.LongitudinalStartPosition = longitudinalStartPosition
		this.LongitudinalEndPosition = longitudinalEndPosition
		this.ReinforcementRole = reinforcementRole
		this.SectionDefinition = sectionDefinition
		this.CrossSectionReinforcementDefinitions = crossSectionReinforcementDefinitions

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.LongitudinalStartPosition != null ? this.toStepValue(this.LongitudinalStartPosition) : "$");
		parameters.push(this.LongitudinalEndPosition != null ? this.toStepValue(this.LongitudinalEndPosition) : "$");
		parameters.push(this.TransversePosition != null ? this.toStepValue(this.TransversePosition) : "$");
		parameters.push(this.toStepValue(this.ReinforcementRole));
		parameters.push(this.SectionDefinition != null ? this.toStepValue(this.SectionDefinition) : "$");
		parameters.push(this.CrossSectionReinforcementDefinitions != null ? this.toStepValue(this.CrossSectionReinforcementDefinitions) : "$");

        return parameters.join();
    }
}