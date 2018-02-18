
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcBoundingBox} from "./IfcBoundingBox.g"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxedhalfspace.htm
 */
export class IfcBoxedHalfSpace extends IfcHalfSpaceSolid {
	Enclosure : IfcBoundingBox

    constructor(baseSurface : IfcSurface, agreementFlag : IfcBoolean, enclosure : IfcBoundingBox) {
        super(baseSurface,agreementFlag)
		this.Enclosure = enclosure

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.BaseSurface))
		parameters.push(BaseIfc.toStepValue(this.AgreementFlag))
		parameters.push(BaseIfc.toStepValue(this.Enclosure))

        return parameters.join();
    }
}