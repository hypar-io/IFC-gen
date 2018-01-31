
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcConversionBasedUnitWithOffset} from "./IfcConversionBasedUnitWithOffset.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

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