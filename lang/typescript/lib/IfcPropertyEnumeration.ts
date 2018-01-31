
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcLabel} from "./IfcLabel"
import {IfcValue} from "./IfcValue"
import {IfcUnit} from "./IfcUnit"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyenumeration.htm
export class IfcPropertyEnumeration extends IfcPropertyAbstraction {
	Name : IfcLabel
	EnumerationValues : Array<IfcValue>
	Unit : IfcUnit// optional

    constructor(name : IfcLabel, enumerationValues : Array<IfcValue>) {
        super()

		this.Name = name
		this.EnumerationValues = enumerationValues

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.EnumerationValues != null ? this.toStepValue(this.EnumerationValues) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");

        return parameters.join();
    }
}