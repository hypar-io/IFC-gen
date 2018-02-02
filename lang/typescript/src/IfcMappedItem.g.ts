
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmappeditem.htm
 */
export class IfcMappedItem extends IfcRepresentationItem {
	MappingSource : IfcRepresentationMap
	MappingTarget : IfcCartesianTransformationOperator

    constructor(mappingSource : IfcRepresentationMap, mappingTarget : IfcCartesianTransformationOperator) {
        super()

		this.MappingSource = mappingSource
		this.MappingTarget = mappingTarget

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.MappingSource != null ? BaseIfc.toStepValue(this.MappingSource) : "$");
		parameters.push(this.MappingTarget != null ? BaseIfc.toStepValue(this.MappingTarget) : "$");

        return parameters.join();
    }
}