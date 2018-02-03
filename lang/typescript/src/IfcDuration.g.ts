
import {BaseIfc} from "./BaseIfc"


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcduration.htm
export class IfcDuration extends BaseIfc
{
    protected wrappedValue : string

    constructor(value : string){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
