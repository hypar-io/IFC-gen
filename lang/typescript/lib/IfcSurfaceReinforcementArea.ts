
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcRatioMeasure} from "./IfcRatioMeasure"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacereinforcementarea.htm
export class IfcSurfaceReinforcementArea extends IfcStructuralLoadOrResult {
	SurfaceReinforcement1 : Array<IfcLengthMeasure>// optional
	SurfaceReinforcement2 : Array<IfcLengthMeasure>// optional
	ShearReinforcement : IfcRatioMeasure// optional

    constructor() {
        super()
		this.SurfaceReinforcement1 = new Array<IfcLengthMeasure>()
		this.SurfaceReinforcement2 = new Array<IfcLengthMeasure>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.SurfaceReinforcement1 != null ? this.toStepValue(this.SurfaceReinforcement1) : "$");
		parameters.push(this.SurfaceReinforcement2 != null ? this.toStepValue(this.SurfaceReinforcement2) : "$");
		parameters.push(this.ShearReinforcement != null ? this.toStepValue(this.ShearReinforcement) : "$");

        return parameters.join();
    }
}