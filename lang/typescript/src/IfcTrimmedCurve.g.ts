
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcTrimmingPreference} from "./IfcTrimmingPreference.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrimmedcurve.htm
 */
export class IfcTrimmedCurve extends IfcBoundedCurve {
	BasisCurve : IfcCurve
	Trim1 : Array<IfcCartesianPoint|IfcParameterValue>
	Trim2 : Array<IfcCartesianPoint|IfcParameterValue>
	SenseAgreement : IfcBoolean
	MasterRepresentation : IfcTrimmingPreference

    constructor(basisCurve : IfcCurve, trim1 : Array<IfcCartesianPoint|IfcParameterValue>, trim2 : Array<IfcCartesianPoint|IfcParameterValue>, senseAgreement : IfcBoolean, masterRepresentation : IfcTrimmingPreference) {
        super()

		this.BasisCurve = basisCurve
		this.Trim1 = trim1
		this.Trim2 = trim2
		this.SenseAgreement = senseAgreement
		this.MasterRepresentation = masterRepresentation

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.BasisCurve))
		parameters.push(BaseIfc.toStepValue(this.Trim1))
		parameters.push(BaseIfc.toStepValue(this.Trim2))
		parameters.push(BaseIfc.toStepValue(this.SenseAgreement))
		parameters.push(BaseIfc.toStepValue(this.MasterRepresentation))

            return parameters.join();
        }
}