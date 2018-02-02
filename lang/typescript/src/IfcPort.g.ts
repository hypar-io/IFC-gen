
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
import {IfcProduct} from "./IfcProduct.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcport.htm
 */
export abstract class IfcPort extends IfcProduct {
	ContainedIn : Array<IfcRelConnectsPortToElement> // inverse
	ConnectedFrom : Array<IfcRelConnectsPorts> // inverse
	ConnectedTo : Array<IfcRelConnectsPorts> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ContainedIn = new Array<IfcRelConnectsPortToElement>()
		this.ConnectedFrom = new Array<IfcRelConnectsPorts>()
		this.ConnectedTo = new Array<IfcRelConnectsPorts>()

    }
}