
import {BaseIfc} from "./BaseIfc"


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarforcemeasure.htm
export class IfcPlanarForceMeasure extends BaseIfc
{
    protected value : number

    constructor(value : number){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
