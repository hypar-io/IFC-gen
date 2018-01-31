
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcReinforcingBarRoleEnum} from "./IfcReinforcingBarRoleEnum"
import {IfcSectionProperties} from "./IfcSectionProperties"
import {IfcReinforcementBarProperties} from "./IfcReinforcementBarProperties"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties"

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