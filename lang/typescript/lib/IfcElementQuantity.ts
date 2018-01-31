
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcTypeObject} from "./IfcTypeObject"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity"
import {IfcQuantitySet} from "./IfcQuantitySet"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementquantity.htm
export class IfcElementQuantity extends IfcQuantitySet {
	MethodOfMeasurement : IfcLabel// optional
	Quantities : Array<IfcPhysicalQuantity>

    constructor(globalId : IfcGloballyUniqueId, quantities : Array<IfcPhysicalQuantity>) {
        super(globalId)

		this.Quantities = quantities

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.MethodOfMeasurement != null ? this.toStepValue(this.MethodOfMeasurement) : "$");
		parameters.push(this.Quantities != null ? this.toStepValue(this.Quantities) : "$");

        return parameters.join();
    }
}