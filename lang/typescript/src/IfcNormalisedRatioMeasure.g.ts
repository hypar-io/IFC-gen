
import {BaseIfc} from "./BaseIfc"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnormalisedratiomeasure.htm
export class IfcNormalisedRatioMeasure extends BaseIfc
{
    protected wrappedValue : IfcRatioMeasure

    constructor(value : IfcRatioMeasure){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
}
