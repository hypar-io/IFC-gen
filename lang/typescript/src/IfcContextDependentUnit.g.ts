
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentunit.htm
 */
export class IfcContextDependentUnit extends IfcNamedUnit {
	Name : IfcLabel
	HasExternalReference : Array<IfcExternalReferenceRelationship> // inverse

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcLabel) {
        super(dimensions,unitType)
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()

		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Dimensions != null ? BaseIfc.toStepValue(this.Dimensions) : "$");
		parameters.push(BaseIfc.toStepValue(this.UnitType));
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}