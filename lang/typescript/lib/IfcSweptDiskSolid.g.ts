
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcSweptDiskSolidPolygonal} from "./IfcSweptDiskSolidPolygonal.g"
import {IfcSolidModel} from "./IfcSolidModel.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolid.htm
export class IfcSweptDiskSolid extends IfcSolidModel {
	Directrix : IfcCurve
	Radius : IfcPositiveLengthMeasure
	InnerRadius : IfcPositiveLengthMeasure// optional
	StartParam : IfcParameterValue// optional
	EndParam : IfcParameterValue// optional

    constructor(directrix : IfcCurve, radius : IfcPositiveLengthMeasure) {
        super()

		this.Directrix = directrix
		this.Radius = radius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Directrix != null ? this.toStepValue(this.Directrix) : "$");
		parameters.push(this.Radius != null ? this.toStepValue(this.Radius) : "$");
		parameters.push(this.InnerRadius != null ? this.toStepValue(this.InnerRadius) : "$");
		parameters.push(this.StartParam != null ? this.toStepValue(this.StartParam) : "$");
		parameters.push(this.EndParam != null ? this.toStepValue(this.EndParam) : "$");

        return parameters.join();
    }
}