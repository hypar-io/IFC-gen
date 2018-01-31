
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure"
import {IfcElementCompositionEnum} from "./IfcElementCompositionEnum"
import {IfcSpaceTypeEnum} from "./IfcSpaceTypeEnum"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcRelCoversSpaces} from "./IfcRelCoversSpaces"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary"
import {IfcSpatialStructureElement} from "./IfcSpatialStructureElement"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspace.htm
export class IfcSpace extends IfcSpatialStructureElement {
	PredefinedType : IfcSpaceTypeEnum// optional
	ElevationWithFlooring : IfcLengthMeasure// optional
	HasCoverings : Array<IfcRelCoversSpaces>// inverse
	BoundedBy : Array<IfcRelSpaceBoundary>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.HasCoverings = new Array<IfcRelCoversSpaces>()
		this.BoundedBy = new Array<IfcRelSpaceBoundary>()

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
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.ElevationWithFlooring != null ? this.toStepValue(this.ElevationWithFlooring) : "$");

        return parameters.join();
    }
}