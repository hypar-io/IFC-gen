
import {BaseIfc} from "./BaseIfc"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensionalexponents.htm
 */
export class IfcDimensionalExponents extends BaseIfc {
	LengthExponent : number
	MassExponent : number
	TimeExponent : number
	ElectricCurrentExponent : number
	ThermodynamicTemperatureExponent : number
	AmountOfSubstanceExponent : number
	LuminousIntensityExponent : number

    constructor(lengthExponent : number, massExponent : number, timeExponent : number, electricCurrentExponent : number, thermodynamicTemperatureExponent : number, amountOfSubstanceExponent : number, luminousIntensityExponent : number) {
        super()

		this.LengthExponent = lengthExponent
		this.MassExponent = massExponent
		this.TimeExponent = timeExponent
		this.ElectricCurrentExponent = electricCurrentExponent
		this.ThermodynamicTemperatureExponent = thermodynamicTemperatureExponent
		this.AmountOfSubstanceExponent = amountOfSubstanceExponent
		this.LuminousIntensityExponent = luminousIntensityExponent

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.LengthExponent != null ? BaseIfc.toStepValue(this.LengthExponent) : "$");
		parameters.push(this.MassExponent != null ? BaseIfc.toStepValue(this.MassExponent) : "$");
		parameters.push(this.TimeExponent != null ? BaseIfc.toStepValue(this.TimeExponent) : "$");
		parameters.push(this.ElectricCurrentExponent != null ? BaseIfc.toStepValue(this.ElectricCurrentExponent) : "$");
		parameters.push(this.ThermodynamicTemperatureExponent != null ? BaseIfc.toStepValue(this.ThermodynamicTemperatureExponent) : "$");
		parameters.push(this.AmountOfSubstanceExponent != null ? BaseIfc.toStepValue(this.AmountOfSubstanceExponent) : "$");
		parameters.push(this.LuminousIntensityExponent != null ? BaseIfc.toStepValue(this.LuminousIntensityExponent) : "$");

        return parameters.join();
    }
}