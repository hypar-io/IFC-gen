
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
import {IfcMechanicalFastenerTypeEnum} from "./IfcMechanicalFastenerTypeEnum"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcElementComponentType} from "./IfcElementComponentType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastenertype.htm
export class IfcMechanicalFastenerType extends IfcElementComponentType {
	PredefinedType : IfcMechanicalFastenerTypeEnum
	NominalDiameter : IfcPositiveLengthMeasure// optional
	NominalLength : IfcPositiveLengthMeasure// optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcMechanicalFastenerTypeEnum) {
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
		parameters.push(this.NominalLength != null ? this.toStepValue(this.NominalLength) : "$");

        return parameters.join();
    }
}