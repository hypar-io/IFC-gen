
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylelighting.htm
 */
export class IfcSurfaceStyleLighting extends IfcPresentationItem {
	DiffuseTransmissionColour : IfcColourRgb
	DiffuseReflectionColour : IfcColourRgb
	TransmissionColour : IfcColourRgb
	ReflectanceColour : IfcColourRgb

    constructor(diffuseTransmissionColour : IfcColourRgb, diffuseReflectionColour : IfcColourRgb, transmissionColour : IfcColourRgb, reflectanceColour : IfcColourRgb) {
        super()

		this.DiffuseTransmissionColour = diffuseTransmissionColour
		this.DiffuseReflectionColour = diffuseReflectionColour
		this.TransmissionColour = transmissionColour
		this.ReflectanceColour = reflectanceColour

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.DiffuseTransmissionColour))
		parameters.push(BaseIfc.toStepValue(this.DiffuseReflectionColour))
		parameters.push(BaseIfc.toStepValue(this.TransmissionColour))
		parameters.push(BaseIfc.toStepValue(this.ReflectanceColour))

            return parameters.join();
        }
}