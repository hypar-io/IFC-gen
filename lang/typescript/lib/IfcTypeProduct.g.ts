
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcDoorStyle} from "./IfcDoorStyle.g"
import {IfcElementType} from "./IfcElementType.g"
import {IfcSpatialElementType} from "./IfcSpatialElementType.g"
import {IfcWindowStyle} from "./IfcWindowStyle.g"
import {IfcTypeObject} from "./IfcTypeObject.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeproduct.htm
export class IfcTypeProduct extends IfcTypeObject {
	RepresentationMaps : Array<IfcRepresentationMap>// optional
	Tag : IfcLabel// optional
	ReferencedBy : Array<IfcRelAssignsToProduct>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.RepresentationMaps = new Array<IfcRepresentationMap>()
		this.ReferencedBy = new Array<IfcRelAssignsToProduct>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? this.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? this.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.RepresentationMaps != null ? this.toStepValue(this.RepresentationMaps) : "$");
		parameters.push(this.Tag != null ? this.toStepValue(this.Tag) : "$");

        return parameters.join();
    }
}