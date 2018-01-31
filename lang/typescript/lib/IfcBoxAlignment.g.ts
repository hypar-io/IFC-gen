
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxalignment.htm
export class IfcBoxAlignment extends BaseIfc
{
    protected value : IfcLabel

    constructor(value : IfcLabel){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
