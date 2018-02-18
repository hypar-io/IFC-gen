
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"
import {IfcPresentationStyleAssignment} from "./IfcPresentationStyleAssignment.g"
import {IfcLabel} from "./IfcLabel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyleditem.htm
 */
export class IfcStyledItem extends IfcRepresentationItem {
	Item : IfcRepresentationItem // optional
	Styles : Array<IfcPresentationStyle|IfcPresentationStyleAssignment>
	Name : IfcLabel // optional

    constructor(styles : Array<IfcPresentationStyle|IfcPresentationStyleAssignment>) {
        super()

		this.Styles = styles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Item))
		parameters.push(BaseIfc.toStepValue(this.Styles))
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join();
    }
}