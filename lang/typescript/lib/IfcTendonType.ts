
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcTendonTypeEnum} from "./IfcTendonTypeEnum"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcAreaMeasure} from "./IfcAreaMeasure"
import {IfcReinforcingElementType} from "./IfcReinforcingElementType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendontype.htm
export class IfcTendonType extends IfcReinforcingElementType {
	PredefinedType : IfcTendonTypeEnum
	NominalDiameter : IfcPositiveLengthMeasure// optional
	CrossSectionArea : IfcAreaMeasure// optional
	SheathDiameter : IfcPositiveLengthMeasure// optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcTendonTypeEnum) {
        super(globalId)

		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? this.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? this.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.RepresentationMaps != null ? this.toStepValue(this.RepresentationMaps) : "$");
		parameters.push(this.Tag != null ? this.toStepValue(this.Tag) : "$");
		parameters.push(this.ElementType != null ? this.toStepValue(this.ElementType) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.NominalDiameter != null ? this.toStepValue(this.NominalDiameter) : "$");
		parameters.push(this.CrossSectionArea != null ? this.toStepValue(this.CrossSectionArea) : "$");
		parameters.push(this.SheathDiameter != null ? this.toStepValue(this.SheathDiameter) : "$");

        return parameters.join();
    }
}