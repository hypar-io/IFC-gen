
import {BaseIfc} from "./BaseIfc"


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboolean.htm
export class IfcBoolean extends BaseIfc
{
    protected wrappedValue : boolean

    constructor(value : boolean){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
}
