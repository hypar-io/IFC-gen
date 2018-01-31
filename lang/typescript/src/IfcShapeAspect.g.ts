
import {BaseIfc} from "./BaseIfc"
import {IfcShapeModel} from "./IfcShapeModel.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcProductRepresentationSelect} from "./IfcProductRepresentationSelect.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapeaspect.htm
export class IfcShapeAspect extends BaseIfc {
	ShapeRepresentations : Array<IfcShapeModel>
	Name : IfcLabel// optional
	Description : IfcText// optional
	ProductDefinitional : IfcLogical
	PartOfProductDefinitionShape : IfcProductRepresentationSelect// optional

    constructor(shapeRepresentations : Array<IfcShapeModel>, productDefinitional : IfcLogical) {
        super()

		this.ShapeRepresentations = shapeRepresentations
		this.ProductDefinitional = productDefinitional

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ShapeRepresentations != null ? this.toStepValue(this.ShapeRepresentations) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ProductDefinitional != null ? this.toStepValue(this.ProductDefinitional) : "$");
		parameters.push(this.PartOfProductDefinitionShape != null ? this.toStepValue(this.PartOfProductDefinitionShape) : "$");

        return parameters.join();
    }
}