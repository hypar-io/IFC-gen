
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcReal} from "./IfcReal.g"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunitwithoffset.htm
 */
export class IfcConversionBasedUnitWithOffset extends IfcConversionBasedUnit {
	ConversionOffset : IfcReal

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcLabel, conversionFactor : IfcMeasureWithUnit, conversionOffset : IfcReal) {
        super(dimensions,unitType,name,conversionFactor)
		this.ConversionOffset = conversionOffset

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Dimensions))
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ConversionFactor))
		parameters.push(BaseIfc.toStepValue(this.ConversionOffset))

        return parameters.join();
    }
}