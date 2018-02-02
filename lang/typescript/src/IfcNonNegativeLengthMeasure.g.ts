
import {BaseIfc} from "./BaseIfc"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnonnegativelengthmeasure.htm
export class IfcNonNegativeLengthMeasure extends BaseIfc
{
    protected wrappedValue : IfcLengthMeasure

    constructor(value : IfcLengthMeasure){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
}
