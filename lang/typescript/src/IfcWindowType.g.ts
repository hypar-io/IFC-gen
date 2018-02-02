
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
import {IfcWindowTypeEnum} from "./IfcWindowTypeEnum.g"
import {IfcWindowTypePartitioningEnum} from "./IfcWindowTypePartitioningEnum.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcBuildingElementType} from "./IfcBuildingElementType.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowtype.htm
 */
export class IfcWindowType extends IfcBuildingElementType {
	PredefinedType : IfcWindowTypeEnum
	PartitioningType : IfcWindowTypePartitioningEnum
	ParameterTakesPrecedence : IfcBoolean // optional
	UserDefinedPartitioningType : IfcLabel // optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcWindowTypeEnum, partitioningType : IfcWindowTypePartitioningEnum) {
        super(globalId)

		this.PredefinedType = predefinedType
		this.PartitioningType = partitioningType

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
		parameters.push(this.ElementType != null ? BaseIfc.toStepValue(this.ElementType) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(BaseIfc.toStepValue(this.PartitioningType));
		parameters.push(this.ParameterTakesPrecedence != null ? BaseIfc.toStepValue(this.ParameterTakesPrecedence) : "$");
		parameters.push(this.UserDefinedPartitioningType != null ? BaseIfc.toStepValue(this.UserDefinedPartitioningType) : "$");

        return parameters.join();
    }
}