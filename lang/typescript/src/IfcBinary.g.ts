
import {BaseIfc} from "./BaseIfc"


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbinary.htm
export class IfcBinary extends BaseIfc
{
    protected wrappedValue : Uint8Array

    constructor(value : Uint8Array){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
