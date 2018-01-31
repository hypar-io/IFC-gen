
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
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcPostalAddress} from "./IfcPostalAddress"
import {IfcSpatialStructureElement} from "./IfcSpatialStructureElement"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuilding.htm
export class IfcBuilding extends IfcSpatialStructureElement {
	ElevationOfRefHeight : IfcLengthMeasure// optional
	ElevationOfTerrain : IfcLengthMeasure// optional
	BuildingAddress : IfcPostalAddress// optional

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
		parameters.push(this.ElevationOfRefHeight != null ? this.toStepValue(this.ElevationOfRefHeight) : "$");
		parameters.push(this.ElevationOfTerrain != null ? this.toStepValue(this.ElevationOfTerrain) : "$");
		parameters.push(this.BuildingAddress != null ? this.toStepValue(this.BuildingAddress) : "$");

        return parameters.join();
    }
}