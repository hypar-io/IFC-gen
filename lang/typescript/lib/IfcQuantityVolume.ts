
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity"
import {IfcNamedUnit} from "./IfcNamedUnit"
import {IfcVolumeMeasure} from "./IfcVolumeMeasure"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityvolume.htm
export class IfcQuantityVolume extends IfcPhysicalSimpleQuantity {
	VolumeValue : IfcVolumeMeasure
	Formula : IfcLabel// optional

    constructor(name : IfcLabel, volumeValue : IfcVolumeMeasure) {
        super(name)

		this.VolumeValue = volumeValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");
		parameters.push(this.VolumeValue != null ? this.toStepValue(this.VolumeValue) : "$");
		parameters.push(this.Formula != null ? this.toStepValue(this.Formula) : "$");

        return parameters.join();
    }
}