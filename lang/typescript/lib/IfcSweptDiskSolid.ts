
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCurve} from "./IfcCurve"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcSweptDiskSolidPolygonal} from "./IfcSweptDiskSolidPolygonal"
import {IfcSolidModel} from "./IfcSolidModel"

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