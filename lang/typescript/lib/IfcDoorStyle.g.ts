
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
import {IfcDoorStyleOperationEnum} from "./IfcDoorStyleOperationEnum"
import {IfcDoorStyleConstructionEnum} from "./IfcDoorStyleConstructionEnum"
import {IfcBoolean} from "./IfcBoolean"
import {IfcTypeProduct} from "./IfcTypeProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorstyle.htm
export class IfcDoorStyle extends IfcTypeProduct {
	OperationType : IfcDoorStyleOperationEnum
	ConstructionType : IfcDoorStyleConstructionEnum
	ParameterTakesPrecedence : IfcBoolean
	Sizeable : IfcBoolean

    constructor(globalId : IfcGloballyUniqueId, operationType : IfcDoorStyleOperationEnum, constructionType : IfcDoorStyleConstructionEnum, parameterTakesPrecedence : IfcBoolean, sizeable : IfcBoolean) {
        super(globalId)

		this.OperationType = operationType
		this.ConstructionType = constructionType
		this.ParameterTakesPrecedence = parameterTakesPrecedence
		this.Sizeable = sizeable

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
		parameters.push(this.toStepValue(this.OperationType));
		parameters.push(this.toStepValue(this.ConstructionType));
		parameters.push(this.ParameterTakesPrecedence != null ? this.toStepValue(this.ParameterTakesPrecedence) : "$");
		parameters.push(this.Sizeable != null ? this.toStepValue(this.Sizeable) : "$");

        return parameters.join();
    }
}