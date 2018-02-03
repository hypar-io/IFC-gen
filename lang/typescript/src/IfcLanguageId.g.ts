
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclanguageid.htm
export class IfcLanguageId extends BaseIfc
{
    protected wrappedValue : IfcIdentifier

    constructor(value : IfcIdentifier){
        super()
        this.wrappedValue = value
    }	
    toString() : string { return this.wrappedValue.toString() }
    getStepParameters() : string { return BaseIfc.toStepValue(this.wrappedValue) }
}
