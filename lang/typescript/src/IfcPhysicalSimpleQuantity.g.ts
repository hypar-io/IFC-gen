
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalsimplequantity.htm
 */
export abstract class IfcPhysicalSimpleQuantity extends IfcPhysicalQuantity {
	Unit : IfcNamedUnit // optional

    constructor(name : IfcLabel) {
        super(name)

    }
}