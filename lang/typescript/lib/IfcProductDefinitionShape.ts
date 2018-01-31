
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRepresentation} from "./IfcRepresentation"
import {IfcProduct} from "./IfcProduct"
import {IfcShapeAspect} from "./IfcShapeAspect"
import {IfcProductRepresentation} from "./IfcProductRepresentation"

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