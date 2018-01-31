
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents"
import {IfcUnitEnum} from "./IfcUnitEnum"
import {IfcSIPrefix} from "./IfcSIPrefix"
import {IfcSIUnitName} from "./IfcSIUnitName"
import {IfcNamedUnit} from "./IfcNamedUnit"

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