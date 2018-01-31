
import {BaseIfc} from "./BaseIfc"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinitionset.htm
export class IfcPropertySetDefinitionSet extends BaseIfc
{
    protected value : Array<IfcPropertySetDefinition>

    constructor(value : Array<IfcPropertySetDefinition>){
        super()
        this.value = value
    }	
    toString() : string { return this.value.toString() }
    toStepValue(value: any, isSelectOption? : boolean) : string {
        if(isSelectOption){ return `${this.constructor.name.toUpperCase()}(${this.toStepValue(this.value,isSelectOption)})`; }
        else{ return this.toStepValue(this.value, isSelectOption); }
    }
}
