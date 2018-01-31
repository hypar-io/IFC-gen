
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator"
import {IfcRepresentationItem} from "./IfcRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmappeditem.htm
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
		parameters.push(this.MappingSource != null ? this.toStepValue(this.MappingSource) : "$");
		parameters.push(this.MappingTarget != null ? this.toStepValue(this.MappingTarget) : "$");

        return parameters.join();
    }
}