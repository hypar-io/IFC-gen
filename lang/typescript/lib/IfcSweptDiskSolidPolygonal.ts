
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCurve} from "./IfcCurve"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcSweptDiskSolid} from "./IfcSweptDiskSolid"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolidpolygonal.htm
export class IfcSweptDiskSolidPolygonal extends IfcSweptDiskSolid {
	FilletRadius : IfcPositiveLengthMeasure// optional

    constructor(directrix : IfcCurve, radius : IfcPositiveLengthMeasure) {
        super(directrix,radius)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Directrix != null ? this.toStepValue(this.Directrix) : "$");
		parameters.push(this.Radius != null ? this.toStepValue(this.Radius) : "$");
		parameters.push(this.InnerRadius != null ? this.toStepValue(this.InnerRadius) : "$");
		parameters.push(this.StartParam != null ? this.toStepValue(this.StartParam) : "$");
		parameters.push(this.EndParam != null ? this.toStepValue(this.EndParam) : "$");
		parameters.push(this.FilletRadius != null ? this.toStepValue(this.FilletRadius) : "$");

        return parameters.join();
    }
}