
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
import {IfcAnnotation} from "./IfcAnnotation.g"
import {IfcElement} from "./IfcElement.g"
import {IfcGrid} from "./IfcGrid.g"
import {IfcPort} from "./IfcPort.g"
import {IfcProxy} from "./IfcProxy.g"
import {IfcSpatialElement} from "./IfcSpatialElement.g"
import {IfcStructuralActivity} from "./IfcStructuralActivity.g"
import {IfcStructuralItem} from "./IfcStructuralItem.g"
import {IfcObject} from "./IfcObject.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproduct.htm
export abstract class IfcProduct extends IfcObject {
	ObjectPlacement : IfcObjectPlacement// optional
	Representation : IfcProductRepresentation// optional
	ReferencedBy : Array<IfcRelAssignsToProduct>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ReferencedBy = new Array<IfcRelAssignsToProduct>()

    }
}