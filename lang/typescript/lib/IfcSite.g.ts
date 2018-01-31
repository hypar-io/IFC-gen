
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
import {IfcElementCompositionEnum} from "./IfcElementCompositionEnum.g"
import {IfcCompoundPlaneAngleMeasure} from "./IfcCompoundPlaneAngleMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPostalAddress} from "./IfcPostalAddress.g"
import {IfcSpatialStructureElement} from "./IfcSpatialStructureElement.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsite.htm
export class IfcSite extends IfcSpatialStructureElement {
	RefLatitude : IfcCompoundPlaneAngleMeasure// optional
	RefLongitude : IfcCompoundPlaneAngleMeasure// optional
	RefElevation : IfcLengthMeasure// optional
	LandTitleNumber : IfcLabel// optional
	SiteAddress : IfcPostalAddress// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.ObjectPlacement != null ? this.toStepValue(this.ObjectPlacement) : "$");
		parameters.push(this.Representation != null ? this.toStepValue(this.Representation) : "$");
		parameters.push(this.LongName != null ? this.toStepValue(this.LongName) : "$");
		parameters.push(this.toStepValue(this.CompositionType));
		parameters.push(this.RefLatitude != null ? this.toStepValue(this.RefLatitude) : "$");
		parameters.push(this.RefLongitude != null ? this.toStepValue(this.RefLongitude) : "$");
		parameters.push(this.RefElevation != null ? this.toStepValue(this.RefElevation) : "$");
		parameters.push(this.LandTitleNumber != null ? this.toStepValue(this.LandTitleNumber) : "$");
		parameters.push(this.SiteAddress != null ? this.toStepValue(this.SiteAddress) : "$");

        return parameters.join();
    }
}