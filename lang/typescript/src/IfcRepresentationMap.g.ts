
import {BaseIfc} from "./BaseIfc"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcMappedItem} from "./IfcMappedItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationmap.htm
 */
export class IfcRepresentationMap extends BaseIfc {
	MappingOrigin : IfcAxis2Placement2D|IfcAxis2Placement3D
	MappedRepresentation : IfcRepresentation
	HasShapeAspects : Array<IfcShapeAspect> // inverse
	MapUsage : Array<IfcMappedItem> // inverse

    constructor(mappingOrigin : IfcAxis2Placement2D|IfcAxis2Placement3D, mappedRepresentation : IfcRepresentation) {
        super()
		this.MappingOrigin = mappingOrigin
		this.MappedRepresentation = mappedRepresentation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.MappingOrigin))
		parameters.push(BaseIfc.toStepValue(this.MappedRepresentation))

        return parameters.join();
    }
}