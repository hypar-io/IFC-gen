
import {BaseIfc} from "./BaseIfc"


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstrippedoptional.htm
export class IfcStrippedOptional extends BaseIfc
{
    protected wrappedValue : boolean

    constructor(value : boolean){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
}
