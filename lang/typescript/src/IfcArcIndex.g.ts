
import {BaseIfc} from "./BaseIfc"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarcindex.htm
export class IfcArcIndex extends BaseIfc
{
    protected wrappedValue : Array<IfcPositiveInteger>

    constructor(value : Array<IfcPositiveInteger>){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
