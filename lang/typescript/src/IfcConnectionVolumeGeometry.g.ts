
import {BaseIfc} from "./BaseIfc"
import {IfcSolidOrShell} from "./IfcSolidOrShell.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionvolumegeometry.htm
export class IfcConnectionVolumeGeometry extends IfcConnectionGeometry {
	VolumeOnRelatingElement : IfcSolidOrShell
	VolumeOnRelatedElement : IfcSolidOrShell// optional

    constructor(volumeOnRelatingElement : IfcSolidOrShell) {
        super()

		this.VolumeOnRelatingElement = volumeOnRelatingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.VolumeOnRelatingElement != null ? this.toStepValue(this.VolumeOnRelatingElement) : "$");
		parameters.push(this.VolumeOnRelatedElement != null ? this.toStepValue(this.VolumeOnRelatedElement) : "$");

        return parameters.join();
    }
}