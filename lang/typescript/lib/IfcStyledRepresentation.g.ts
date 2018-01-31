
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext"
import {IfcLabel} from "./IfcLabel"
import {IfcRepresentationItem} from "./IfcRepresentationItem"
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcStyleModel} from "./IfcStyleModel"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyledrepresentation.htm
export class IfcStyledRepresentation extends IfcStyleModel {

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