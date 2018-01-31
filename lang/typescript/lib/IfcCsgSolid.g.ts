
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCsgSelect} from "./IfcCsgSelect.g"
import {IfcSolidModel} from "./IfcSolidModel.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgsolid.htm
export class IfcCsgSolid extends IfcSolidModel {
	TreeRootExpression : IfcCsgSelect

    constructor(treeRootExpression : IfcCsgSelect) {
        super()

		this.TreeRootExpression = treeRootExpression

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.TreeRootExpression != null ? this.toStepValue(this.TreeRootExpression) : "$");

        return parameters.join();
    }
}