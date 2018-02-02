
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcProduct} from "./IfcProduct.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialelement.htm
 */
export abstract class IfcSpatialElement extends IfcProduct {
	LongName : IfcLabel // optional
	ContainsElements : Array<IfcRelContainedInSpatialStructure> // inverse
	ServicedBySystems : Array<IfcRelServicesBuildings> // inverse
	ReferencesElements : Array<IfcRelReferencedInSpatialStructure> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ContainsElements = new Array<IfcRelContainedInSpatialStructure>()
		this.ServicedBySystems = new Array<IfcRelServicesBuildings>()
		this.ReferencesElements = new Array<IfcRelReferencedInSpatialStructure>()

    }
}