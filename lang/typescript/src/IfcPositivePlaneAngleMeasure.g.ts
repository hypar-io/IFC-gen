
import {BaseIfc} from "./BaseIfc"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveplaneanglemeasure.htm
export class IfcPositivePlaneAngleMeasure extends BaseIfc
{
    protected wrappedValue : IfcPlaneAngleMeasure

    constructor(value : IfcPlaneAngleMeasure){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
