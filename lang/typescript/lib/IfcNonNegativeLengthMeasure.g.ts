
import {BaseIfc} from "./BaseIfc"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnonnegativelengthmeasure.htm
export class IfcNonNegativeLengthMeasure extends BaseIfc
{
    protected value : IfcLengthMeasure

    constructor(value : IfcLengthMeasure){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
