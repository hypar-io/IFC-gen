
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcRepresentationItem} from "./IfcRepresentationItem"
import {IfcStyleAssignmentSelect} from "./IfcStyleAssignmentSelect"
import {IfcLabel} from "./IfcLabel"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyleditem.htm
export class IfcStyledItem extends IfcRepresentationItem {
	Item : IfcRepresentationItem// optional
	Styles : Array<IfcStyleAssignmentSelect>
	Name : IfcLabel// optional

    constructor(styles : Array<IfcStyleAssignmentSelect>) {
        super()

		this.Styles = styles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Item != null ? this.toStepValue(this.Item) : "$");
		parameters.push(this.Styles != null ? this.toStepValue(this.Styles) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}