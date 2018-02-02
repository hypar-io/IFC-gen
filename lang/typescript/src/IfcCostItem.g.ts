
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssignsToControl} from "./IfcRelAssignsToControl.g"
import {IfcCostItemTypeEnum} from "./IfcCostItemTypeEnum.g"
import {IfcCostValue} from "./IfcCostValue.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"
import {IfcControl} from "./IfcControl.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostitem.htm
 */
export class IfcCostItem extends IfcControl {
	PredefinedType : IfcCostItemTypeEnum // optional
	CostValues : Array<IfcCostValue> // optional
	CostQuantities : Array<IfcPhysicalQuantity> // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.CostValues = new Array<IfcCostValue>()
		this.CostQuantities = new Array<IfcPhysicalQuantity>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(this.CostValues != null ? BaseIfc.toStepValue(this.CostValues) : "$");
		parameters.push(this.CostQuantities != null ? BaseIfc.toStepValue(this.CostQuantities) : "$");

        return parameters.join();
    }
}