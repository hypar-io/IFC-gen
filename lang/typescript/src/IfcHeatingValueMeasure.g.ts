
import {BaseIfc} from "./BaseIfc"


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcheatingvaluemeasure.htm
export class IfcHeatingValueMeasure extends BaseIfc
{
    protected wrappedValue : number

    constructor(value : number){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
