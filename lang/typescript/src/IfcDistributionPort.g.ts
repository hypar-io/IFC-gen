
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
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcRelConnectsPortToElement} from "./IfcRelConnectsPortToElement.g"
import {IfcRelConnectsPorts} from "./IfcRelConnectsPorts.g"
import {IfcFlowDirectionEnum} from "./IfcFlowDirectionEnum.g"
import {IfcDistributionPortTypeEnum} from "./IfcDistributionPortTypeEnum.g"
import {IfcDistributionSystemEnum} from "./IfcDistributionSystemEnum.g"
import {IfcPort} from "./IfcPort.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionport.htm
 */
export class IfcDistributionPort extends IfcPort {
	FlowDirection : IfcFlowDirectionEnum // optional
	PredefinedType : IfcDistributionPortTypeEnum // optional
	SystemType : IfcDistributionSystemEnum // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(this.ObjectPlacement != null ? BaseIfc.toStepValue(this.ObjectPlacement) : "$");
		parameters.push(this.Representation != null ? BaseIfc.toStepValue(this.Representation) : "$");
		parameters.push(BaseIfc.toStepValue(this.FlowDirection));
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(BaseIfc.toStepValue(this.SystemType));

        return parameters.join();
    }
}