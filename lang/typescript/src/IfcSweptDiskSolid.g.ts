
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcSolidModel} from "./IfcSolidModel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolid.htm
 */
export class IfcSweptDiskSolid extends IfcSolidModel {
	Directrix : IfcCurve
	Radius : IfcPositiveLengthMeasure
	InnerRadius : IfcPositiveLengthMeasure // optional
	StartParam : IfcParameterValue // optional
	EndParam : IfcParameterValue // optional

    constructor(directrix : IfcCurve, radius : IfcPositiveLengthMeasure) {
        super()

		this.Directrix = directrix
		this.Radius = radius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Directrix))
		parameters.push(BaseIfc.toStepValue(this.Radius))
		parameters.push(BaseIfc.toStepValue(this.InnerRadius))
		parameters.push(BaseIfc.toStepValue(this.StartParam))
		parameters.push(BaseIfc.toStepValue(this.EndParam))

        return parameters.join();
    }
}