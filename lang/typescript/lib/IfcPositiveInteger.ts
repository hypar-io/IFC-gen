
import {BaseIfc} from "./BaseIfc"
import {IfcInteger} from "./IfcInteger"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveinteger.htm
export class IfcPositiveInteger extends BaseIfc
{
    protected value : IfcInteger

    constructor(value : IfcInteger){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
