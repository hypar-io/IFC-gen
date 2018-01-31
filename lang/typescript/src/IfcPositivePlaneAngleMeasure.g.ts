
import {BaseIfc} from "./BaseIfc"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveplaneanglemeasure.htm
export class IfcPositivePlaneAngleMeasure extends BaseIfc
{
    protected value : IfcPlaneAngleMeasure

    constructor(value : IfcPlaneAngleMeasure){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
