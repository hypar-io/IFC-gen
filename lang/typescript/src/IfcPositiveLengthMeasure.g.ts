
import {BaseIfc} from "./BaseIfc"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositivelengthmeasure.htm
export class IfcPositiveLengthMeasure extends BaseIfc
{
    protected wrappedValue : IfcLengthMeasure

    constructor(value : IfcLengthMeasure){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
}
