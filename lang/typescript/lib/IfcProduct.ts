
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
import {IfcAnnotation} from "./IfcAnnotation"
import {IfcElement} from "./IfcElement"
import {IfcGrid} from "./IfcGrid"
import {IfcPort} from "./IfcPort"
import {IfcProxy} from "./IfcProxy"
import {IfcSpatialElement} from "./IfcSpatialElement"
import {IfcStructuralActivity} from "./IfcStructuralActivity"
import {IfcStructuralItem} from "./IfcStructuralItem"
import {IfcObject} from "./IfcObject"

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