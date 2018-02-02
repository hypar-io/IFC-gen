
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
import {IfcWindowStyleConstructionEnum} from "./IfcWindowStyleConstructionEnum.g"
import {IfcWindowStyleOperationEnum} from "./IfcWindowStyleOperationEnum.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcTypeProduct} from "./IfcTypeProduct.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowstyle.htm
 */
export class IfcWindowStyle extends IfcTypeProduct {
	ConstructionType : IfcWindowStyleConstructionEnum
	OperationType : IfcWindowStyleOperationEnum
	ParameterTakesPrecedence : IfcBoolean
	Sizeable : IfcBoolean

    constructor(globalId : IfcGloballyUniqueId, constructionType : IfcWindowStyleConstructionEnum, operationType : IfcWindowStyleOperationEnum, parameterTakesPrecedence : IfcBoolean, sizeable : IfcBoolean) {
        super(globalId)

		this.ConstructionType = constructionType
		this.OperationType = operationType
		this.ParameterTakesPrecedence = parameterTakesPrecedence
		this.Sizeable = sizeable

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? BaseIfc.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? BaseIfc.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.RepresentationMaps != null ? BaseIfc.toStepValue(this.RepresentationMaps) : "$");
		parameters.push(this.Tag != null ? BaseIfc.toStepValue(this.Tag) : "$");
		parameters.push(BaseIfc.toStepValue(this.ConstructionType));
		parameters.push(BaseIfc.toStepValue(this.OperationType));
		parameters.push(this.ParameterTakesPrecedence != null ? BaseIfc.toStepValue(this.ParameterTakesPrecedence) : "$");
		parameters.push(this.Sizeable != null ? BaseIfc.toStepValue(this.Sizeable) : "$");

        return parameters.join();
    }
}