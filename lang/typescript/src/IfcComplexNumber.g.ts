
import {BaseIfc} from "./BaseIfc"


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexnumber.htm
export class IfcComplexNumber extends BaseIfc
{
    protected wrappedValue : Array<number>

    constructor(value : Array<number>){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
