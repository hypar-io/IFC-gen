
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents"
import {IfcUnitEnum} from "./IfcUnitEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcNamedUnit} from "./IfcNamedUnit"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentunit.htm
export class IfcContextDependentUnit extends IfcNamedUnit {
	Name : IfcLabel
	HasExternalReference : Array<IfcExternalReferenceRelationship>// inverse

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcLabel) {
        super(dimensions,unitType)
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()

		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Dimensions != null ? this.toStepValue(this.Dimensions) : "$");
		parameters.push(this.toStepValue(this.UnitType));
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}