
import {BaseIfc} from "./BaseIfc"
import {IfcRatioMeasure} from "./IfcRatioMeasure"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnormalisedratiomeasure.htm
export class IfcNormalisedRatioMeasure extends BaseIfc
{
    protected value : IfcRatioMeasure

    constructor(value : IfcRatioMeasure){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
