
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCurve} from "./IfcCurve"
import {IfcTrimmingSelect} from "./IfcTrimmingSelect"
import {IfcBoolean} from "./IfcBoolean"
import {IfcTrimmingPreference} from "./IfcTrimmingPreference"
import {IfcBoundedCurve} from "./IfcBoundedCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrimmedcurve.htm
export class IfcTrimmedCurve extends IfcBoundedCurve {
	BasisCurve : IfcCurve
	Trim1 : Array<IfcTrimmingSelect>
	Trim2 : Array<IfcTrimmingSelect>
	SenseAgreement : IfcBoolean
	MasterRepresentation : IfcTrimmingPreference

    constructor(basisCurve : IfcCurve, trim1 : Array<IfcTrimmingSelect>, trim2 : Array<IfcTrimmingSelect>, senseAgreement : IfcBoolean, masterRepresentation : IfcTrimmingPreference) {
        super()

		this.BasisCurve = basisCurve
		this.Trim1 = trim1
		this.Trim2 = trim2
		this.SenseAgreement = senseAgreement
		this.MasterRepresentation = masterRepresentation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisCurve != null ? this.toStepValue(this.BasisCurve) : "$");
		parameters.push(this.Trim1 != null ? this.toStepValue(this.Trim1) : "$");
		parameters.push(this.Trim2 != null ? this.toStepValue(this.Trim2) : "$");
		parameters.push(this.SenseAgreement != null ? this.toStepValue(this.SenseAgreement) : "$");
		parameters.push(this.MasterRepresentation != null ? this.toStepValue(this.MasterRepresentation) : "$");

        return parameters.join();
    }
}