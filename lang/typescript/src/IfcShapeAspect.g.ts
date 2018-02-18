
import {BaseIfc} from "./BaseIfc"
import {IfcShapeModel} from "./IfcShapeModel.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcProductDefinitionShape} from "./IfcProductDefinitionShape.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapeaspect.htm
 */
export class IfcShapeAspect extends BaseIfc {
	ShapeRepresentations : Array<IfcShapeModel>
	Name : IfcLabel // optional
	Description : IfcText // optional
	ProductDefinitional : IfcLogical
	PartOfProductDefinitionShape : IfcProductDefinitionShape|IfcRepresentationMap // optional

    constructor(shapeRepresentations : Array<IfcShapeModel>, productDefinitional : IfcLogical) {
        super()
		this.ShapeRepresentations = shapeRepresentations
		this.ProductDefinitional = productDefinitional

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ShapeRepresentations))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ProductDefinitional))
		parameters.push(BaseIfc.toStepValue(this.PartOfProductDefinitionShape))

        return parameters.join();
    }
}