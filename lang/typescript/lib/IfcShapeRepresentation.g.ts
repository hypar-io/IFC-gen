
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcShapeModel} from "./IfcShapeModel.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshaperepresentation.htm
export class IfcShapeRepresentation extends IfcShapeModel {

    constructor(contextOfItems : IfcRepresentationContext, items : Array<IfcRepresentationItem>) {
        super(contextOfItems,items)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ContextOfItems != null ? this.toStepValue(this.ContextOfItems) : "$");
		parameters.push(this.RepresentationIdentifier != null ? this.toStepValue(this.RepresentationIdentifier) : "$");
		parameters.push(this.RepresentationType != null ? this.toStepValue(this.RepresentationType) : "$");
		parameters.push(this.Items != null ? this.toStepValue(this.Items) : "$");

        return parameters.join();
    }
}