
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents"
import {IfcUnitEnum} from "./IfcUnitEnum"
import {IfcContextDependentUnit} from "./IfcContextDependentUnit"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit"
import {IfcSIUnit} from "./IfcSIUnit"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnamedunit.htm
export abstract class IfcNamedUnit extends BaseIfc {
	Dimensions : IfcDimensionalExponents
	UnitType : IfcUnitEnum

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum) {
        super()

		this.Dimensions = dimensions
		this.UnitType = unitType

    }
}