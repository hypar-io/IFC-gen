
import {BaseIfc} from "./BaseIfc"
import {IfcDerivedUnitElement} from "./IfcDerivedUnitElement.g"
import {IfcDerivedUnitEnum} from "./IfcDerivedUnitEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunit.htm
export class IfcDerivedUnit extends BaseIfc {
	Elements : Array<IfcDerivedUnitElement>
	UnitType : IfcDerivedUnitEnum
	UserDefinedType : IfcLabel// optional

    get Dimensions() : IfcDimensionalExponents{throw "Derived property logic has been implemented for Dimensions."} // derived

    constructor(elements : Array<IfcDerivedUnitElement>, unitType : IfcDerivedUnitEnum) {
        super()

		this.Elements = elements
		this.UnitType = unitType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Elements != null ? this.toStepValue(this.Elements) : "$");
		parameters.push(this.toStepValue(this.UnitType));
		parameters.push(this.UserDefinedType != null ? this.toStepValue(this.UserDefinedType) : "$");

        return parameters.join();
    }
}