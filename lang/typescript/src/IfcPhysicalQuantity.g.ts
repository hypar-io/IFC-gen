
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity.g"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity.g"

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