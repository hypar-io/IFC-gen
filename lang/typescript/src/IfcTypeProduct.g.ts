
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
import {IfcTypeObject} from "./IfcTypeObject.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeproduct.htm
 */
export class IfcTypeProduct extends IfcTypeObject {
	RepresentationMaps : Array<IfcRepresentationMap> // optional
	Tag : IfcLabel // optional
	ReferencedBy : Array<IfcRelAssignsToProduct> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.RepresentationMaps = new Array<IfcRepresentationMap>()
		this.ReferencedBy = new Array<IfcRelAssignsToProduct>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? BaseIfc.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? BaseIfc.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.RepresentationMaps != null ? BaseIfc.toStepValue(this.RepresentationMaps) : "$");
		parameters.push(this.Tag != null ? BaseIfc.toStepValue(this.Tag) : "$");

        return parameters.join();
    }
}