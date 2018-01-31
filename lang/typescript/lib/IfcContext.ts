
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
import {IfcRepresentationContext} from "./IfcRepresentationContext"
import {IfcUnitAssignment} from "./IfcUnitAssignment"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcProject} from "./IfcProject"
import {IfcProjectLibrary} from "./IfcProjectLibrary"
import {IfcObjectDefinition} from "./IfcObjectDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontext.htm
export abstract class IfcContext extends IfcObjectDefinition {
	ObjectType : IfcLabel// optional
	LongName : IfcLabel// optional
	Phase : IfcLabel// optional
	RepresentationContexts : Array<IfcRepresentationContext>// optional
	UnitsInContext : IfcUnitAssignment// optional
	IsDefinedBy : Array<IfcRelDefinesByProperties>// inverse
	Declares : Array<IfcRelDeclares>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.RepresentationContexts = new Array<IfcRepresentationContext>()
		this.IsDefinedBy = new Array<IfcRelDefinesByProperties>()
		this.Declares = new Array<IfcRelDeclares>()

    }
}