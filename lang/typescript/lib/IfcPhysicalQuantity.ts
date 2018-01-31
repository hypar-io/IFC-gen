
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalquantity.htm
export abstract class IfcPhysicalQuantity extends BaseIfc {
	Name : IfcLabel
	Description : IfcText// optional
	HasExternalReferences : Array<IfcExternalReferenceRelationship>// inverse
	PartOfComplex : Array<IfcPhysicalComplexQuantity>// inverse

    constructor(name : IfcLabel) {
        super()
		this.HasExternalReferences = new Array<IfcExternalReferenceRelationship>()
		this.PartOfComplex = new Array<IfcPhysicalComplexQuantity>()

		this.Name = name

    }
}