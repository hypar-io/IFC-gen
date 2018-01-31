
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacecurvesweptareasolid.htm
export class IfcSurfaceCurveSweptAreaSolid extends IfcSweptAreaSolid {
	Directrix : IfcCurve
	StartParam : IfcParameterValue// optional
	EndParam : IfcParameterValue// optional
	ReferenceSurface : IfcSurface

    constructor(sweptArea : IfcProfileDef, directrix : IfcCurve, referenceSurface : IfcSurface) {
        super(sweptArea)

		this.Directrix = directrix
		this.ReferenceSurface = referenceSurface

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptArea != null ? this.toStepValue(this.SweptArea) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Directrix != null ? this.toStepValue(this.Directrix) : "$");
		parameters.push(this.StartParam != null ? this.toStepValue(this.StartParam) : "$");
		parameters.push(this.EndParam != null ? this.toStepValue(this.EndParam) : "$");
		parameters.push(this.ReferenceSurface != null ? this.toStepValue(this.ReferenceSurface) : "$");

        return parameters.join();
    }
}