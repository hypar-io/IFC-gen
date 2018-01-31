
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcText} from "./IfcText"
import {IfcProperty} from "./IfcProperty"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextendedproperties.htm
export abstract class IfcExtendedProperties extends IfcPropertyAbstraction {
	Name : IfcIdentifier// optional
	Description : IfcText// optional
	Properties : Array<IfcProperty>

    constructor(properties : Array<IfcProperty>) {
        super()

		this.Properties = properties

    }
}