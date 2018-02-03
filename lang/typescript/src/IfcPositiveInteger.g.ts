
import {BaseIfc} from "./BaseIfc"
import {IfcInteger} from "./IfcInteger.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveinteger.htm
export class IfcPositiveInteger extends BaseIfc
{
    protected wrappedValue : IfcInteger

    constructor(value : IfcInteger){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
