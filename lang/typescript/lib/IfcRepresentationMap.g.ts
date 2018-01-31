
import {BaseIfc} from "./BaseIfc"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcRepresentation} from "./IfcRepresentation"
import {IfcShapeAspect} from "./IfcShapeAspect"
import {IfcMappedItem} from "./IfcMappedItem"

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