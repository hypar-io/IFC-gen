
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcRelConnectsPortToElement} from "./IfcRelConnectsPortToElement"
import {IfcRelConnectsPorts} from "./IfcRelConnectsPorts"
import {IfcDistributionPort} from "./IfcDistributionPort"
import {IfcProduct} from "./IfcProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcport.htm
export abstract class IfcPort extends IfcProduct {
	ContainedIn : Array<IfcRelConnectsPortToElement>// inverse
	ConnectedFrom : Array<IfcRelConnectsPorts>// inverse
	ConnectedTo : Array<IfcRelConnectsPorts>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ContainedIn = new Array<IfcRelConnectsPortToElement>()
		this.ConnectedFrom = new Array<IfcRelConnectsPorts>()
		this.ConnectedTo = new Array<IfcRelConnectsPorts>()

    }
}