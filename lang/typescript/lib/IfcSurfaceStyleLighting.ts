
import {BaseIfc} from "./BaseIfc"
import {IfcColourRgb} from "./IfcColourRgb"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylelighting.htm
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
		parameters.push(this.DiffuseTransmissionColour != null ? this.toStepValue(this.DiffuseTransmissionColour) : "$");
		parameters.push(this.DiffuseReflectionColour != null ? this.toStepValue(this.DiffuseReflectionColour) : "$");
		parameters.push(this.TransmissionColour != null ? this.toStepValue(this.TransmissionColour) : "$");
		parameters.push(this.ReflectanceColour != null ? this.toStepValue(this.ReflectanceColour) : "$");

        return parameters.join();
    }
}