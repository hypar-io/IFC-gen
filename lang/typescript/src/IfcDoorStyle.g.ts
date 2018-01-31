
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcDoorStyleOperationEnum} from "./IfcDoorStyleOperationEnum.g"
import {IfcDoorStyleConstructionEnum} from "./IfcDoorStyleConstructionEnum.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcTypeProduct} from "./IfcTypeProduct.g"

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