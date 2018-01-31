
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents"
import {IfcUnitEnum} from "./IfcUnitEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcReal} from "./IfcReal"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit"

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