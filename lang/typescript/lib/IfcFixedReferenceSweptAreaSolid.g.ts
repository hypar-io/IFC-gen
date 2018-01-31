
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcCurve} from "./IfcCurve"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcDirection} from "./IfcDirection"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfixedreferencesweptareasolid.htm
export class IfcFixedReferenceSweptAreaSolid extends IfcSweptAreaSolid {
	Directrix : IfcCurve
	StartParam : IfcParameterValue// optional
	EndParam : IfcParameterValue// optional
	FixedReference : IfcDirection

    constructor(sweptArea : IfcProfileDef, directrix : IfcCurve, fixedReference : IfcDirection) {
        super(sweptArea)

		this.Directrix = directrix
		this.FixedReference = fixedReference

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptArea != null ? this.toStepValue(this.SweptArea) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Directrix != null ? this.toStepValue(this.Directrix) : "$");
		parameters.push(this.StartParam != null ? this.toStepValue(this.StartParam) : "$");
		parameters.push(this.EndParam != null ? this.toStepValue(this.EndParam) : "$");
		parameters.push(this.FixedReference != null ? this.toStepValue(this.FixedReference) : "$");

        return parameters.join();
    }
}