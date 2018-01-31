
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRepresentationMap} from "./IfcRepresentationMap"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcDoorStyle} from "./IfcDoorStyle"
import {IfcElementType} from "./IfcElementType"
import {IfcSpatialElementType} from "./IfcSpatialElementType"
import {IfcWindowStyle} from "./IfcWindowStyle"
import {IfcTypeObject} from "./IfcTypeObject"

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