
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcSweptDiskSolid} from "./IfcSweptDiskSolid.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolidpolygonal.htm
 */
export class IfcSweptDiskSolidPolygonal extends IfcSweptDiskSolid {
	FilletRadius : IfcPositiveLengthMeasure // optional

    constructor(directrix : IfcCurve, radius : IfcPositiveLengthMeasure) {
        super(directrix,radius)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Directrix != null ? BaseIfc.toStepValue(this.Directrix) : "$");
		parameters.push(this.Radius != null ? BaseIfc.toStepValue(this.Radius) : "$");
		parameters.push(this.InnerRadius != null ? BaseIfc.toStepValue(this.InnerRadius) : "$");
		parameters.push(this.StartParam != null ? BaseIfc.toStepValue(this.StartParam) : "$");
		parameters.push(this.EndParam != null ? BaseIfc.toStepValue(this.EndParam) : "$");
		parameters.push(this.FilletRadius != null ? BaseIfc.toStepValue(this.FilletRadius) : "$");

        return parameters.join();
    }
}