
import {BaseIfc} from "./BaseIfc"
import {IfcAxis2Placement} from "./IfcAxis2Placement.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcMappedItem} from "./IfcMappedItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationmap.htm
export class IfcRepresentationMap extends BaseIfc {
	MappingOrigin : IfcAxis2Placement
	MappedRepresentation : IfcRepresentation
	HasShapeAspects : Array<IfcShapeAspect>// inverse
	MapUsage : Array<IfcMappedItem>// inverse

    constructor(mappingOrigin : IfcAxis2Placement, mappedRepresentation : IfcRepresentation) {
        super()
		this.HasShapeAspects = new Array<IfcShapeAspect>()
		this.MapUsage = new Array<IfcMappedItem>()

		this.MappingOrigin = mappingOrigin
		this.MappedRepresentation = mappedRepresentation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.MappingOrigin != null ? this.toStepValue(this.MappingOrigin) : "$");
		parameters.push(this.MappedRepresentation != null ? this.toStepValue(this.MappedRepresentation) : "$");

        return parameters.join();
    }
}