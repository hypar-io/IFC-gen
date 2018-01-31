
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcProduct} from "./IfcProduct.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductdefinitionshape.htm
export class IfcProductDefinitionShape extends IfcProductRepresentation {
	ShapeOfProduct : Array<IfcProduct>// inverse
	HasShapeAspects : Array<IfcShapeAspect>// inverse

    constructor(representations : Array<IfcRepresentation>) {
        super(representations)
		this.ShapeOfProduct = new Array<IfcProduct>()
		this.HasShapeAspects = new Array<IfcShapeAspect>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Representations != null ? this.toStepValue(this.Representations) : "$");

        return parameters.join();
    }
}