
import {BaseIfc} from "./BaseIfc"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinitionset.htm
export class IfcPropertySetDefinitionSet extends BaseIfc
{
    protected wrappedValue : Array<IfcPropertySetDefinition>

    constructor(value : Array<IfcPropertySetDefinition>){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
}
