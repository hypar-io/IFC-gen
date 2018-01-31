
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents"
import {IfcUnitEnum} from "./IfcUnitEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcConversionBasedUnitWithOffset} from "./IfcConversionBasedUnitWithOffset"
import {IfcNamedUnit} from "./IfcNamedUnit"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunit.htm
export class IfcConversionBasedUnit extends IfcNamedUnit {
	Name : IfcLabel
	ConversionFactor : IfcMeasureWithUnit
	HasExternalReference : Array<IfcExternalReferenceRelationship>// inverse

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcLabel, conversionFactor : IfcMeasureWithUnit) {
        super(dimensions,unitType)
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()

		this.Name = name
		this.ConversionFactor = conversionFactor

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Dimensions != null ? this.toStepValue(this.Dimensions) : "$");
		parameters.push(this.toStepValue(this.UnitType));
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.ConversionFactor != null ? this.toStepValue(this.ConversionFactor) : "$");

        return parameters.join();
    }
}