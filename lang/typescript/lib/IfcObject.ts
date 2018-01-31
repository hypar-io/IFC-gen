
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
import {IfcActor} from "./IfcActor"
import {IfcControl} from "./IfcControl"
import {IfcGroup} from "./IfcGroup"
import {IfcProcess} from "./IfcProcess"
import {IfcProduct} from "./IfcProduct"
import {IfcResource} from "./IfcResource"
import {IfcObjectDefinition} from "./IfcObjectDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobject.htm
export abstract class IfcObject extends IfcObjectDefinition {
	ObjectType : IfcLabel// optional
	IsDeclaredBy : Array<IfcRelDefinesByObject>// inverse
	Declares : Array<IfcRelDefinesByObject>// inverse
	IsTypedBy : Array<IfcRelDefinesByType>// inverse
	IsDefinedBy : Array<IfcRelDefinesByProperties>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.IsDeclaredBy = new Array<IfcRelDefinesByObject>()
		this.Declares = new Array<IfcRelDefinesByObject>()
		this.IsTypedBy = new Array<IfcRelDefinesByType>()
		this.IsDefinedBy = new Array<IfcRelDefinesByProperties>()

    }
}