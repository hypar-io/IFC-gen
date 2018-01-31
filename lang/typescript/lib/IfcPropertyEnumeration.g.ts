
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcValue} from "./IfcValue.g"
import {IfcUnit} from "./IfcUnit.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"

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