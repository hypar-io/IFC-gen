
import {BaseIfc} from "./BaseIfc"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclineindex.htm
export class IfcLineIndex extends BaseIfc
{
    protected value : Array<IfcPositiveInteger>

    constructor(value : Array<IfcPositiveInteger>){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
