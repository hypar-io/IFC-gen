
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcSIPrefix} from "./IfcSIPrefix.g"
import {IfcSIUnitName} from "./IfcSIUnitName.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsiunit.htm
export class IfcSIUnit extends IfcNamedUnit {
	Prefix : IfcSIPrefix// optional
	Name : IfcSIUnitName

    get Dimensions() : IfcDimensionalExponents{throw "Derived property logic has been implemented for Dimensions."} // derived

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcSIUnitName) {
        super(dimensions,unitType)

		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push("*");
		parameters.push(this.toStepValue(this.UnitType));
		parameters.push(this.Prefix != null ? this.toStepValue(this.Prefix) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}