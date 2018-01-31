
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
import {IfcGridAxis} from "./IfcGridAxis"
import {IfcGridTypeEnum} from "./IfcGridTypeEnum"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure"
import {IfcProduct} from "./IfcProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgrid.htm
export class IfcGrid extends IfcProduct {
	UAxes : Array<IfcGridAxis>
	VAxes : Array<IfcGridAxis>
	WAxes : Array<IfcGridAxis>// optional
	PredefinedType : IfcGridTypeEnum// optional
	ContainedInStructure : Array<IfcRelContainedInSpatialStructure>// inverse

    constructor(globalId : IfcGloballyUniqueId, uAxes : Array<IfcGridAxis>, vAxes : Array<IfcGridAxis>) {
        super(globalId)
		this.WAxes = new Array<IfcGridAxis>()
		this.ContainedInStructure = new Array<IfcRelContainedInSpatialStructure>()

		this.UAxes = uAxes
		this.VAxes = vAxes

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
		parameters.push(this.UAxes != null ? this.toStepValue(this.UAxes) : "$");
		parameters.push(this.VAxes != null ? this.toStepValue(this.VAxes) : "$");
		parameters.push(this.WAxes != null ? this.toStepValue(this.WAxes) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}