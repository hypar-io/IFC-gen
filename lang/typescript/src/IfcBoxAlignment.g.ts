
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxalignment.htm
export class IfcBoxAlignment extends BaseIfc
{
    protected wrappedValue : IfcLabel

    constructor(value : IfcLabel){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
}
