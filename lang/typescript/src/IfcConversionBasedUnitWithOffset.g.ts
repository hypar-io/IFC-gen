
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcReal} from "./IfcReal.g"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunitwithoffset.htm
export class IfcConversionBasedUnitWithOffset extends IfcConversionBasedUnit {
	ConversionOffset : IfcReal

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcLabel, conversionFactor : IfcMeasureWithUnit, conversionOffset : IfcReal) {
        super(dimensions,unitType,name,conversionFactor)

		this.ConversionOffset = conversionOffset

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Dimensions != null ? this.toStepValue(this.Dimensions) : "$");
		parameters.push(this.toStepValue(this.UnitType));
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.ConversionFactor != null ? this.toStepValue(this.ConversionFactor) : "$");
		parameters.push(this.ConversionOffset != null ? this.toStepValue(this.ConversionOffset) : "$");

        return parameters.join();
    }
}