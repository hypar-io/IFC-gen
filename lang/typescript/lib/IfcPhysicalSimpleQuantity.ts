
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity"
import {IfcNamedUnit} from "./IfcNamedUnit"
import {IfcQuantityArea} from "./IfcQuantityArea"
import {IfcQuantityCount} from "./IfcQuantityCount"
import {IfcQuantityLength} from "./IfcQuantityLength"
import {IfcQuantityTime} from "./IfcQuantityTime"
import {IfcQuantityVolume} from "./IfcQuantityVolume"
import {IfcQuantityWeight} from "./IfcQuantityWeight"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalsimplequantity.htm
export abstract class IfcPhysicalSimpleQuantity extends IfcPhysicalQuantity {
	Unit : IfcNamedUnit// optional

    constructor(name : IfcLabel) {
        super(name)

    }
}