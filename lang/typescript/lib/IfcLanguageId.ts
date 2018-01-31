
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclanguageid.htm
export class IfcLanguageId extends BaseIfc
{
    protected value : IfcIdentifier

    constructor(value : IfcIdentifier){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
