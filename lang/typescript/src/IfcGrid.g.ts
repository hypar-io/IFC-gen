
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
import {IfcGridAxis} from "./IfcGridAxis.g"
import {IfcGridTypeEnum} from "./IfcGridTypeEnum.g"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcProduct} from "./IfcProduct.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgrid.htm
 */
export class IfcGrid extends IfcProduct {
	UAxes : Array<IfcGridAxis>
	VAxes : Array<IfcGridAxis>
	WAxes : Array<IfcGridAxis> // optional
	PredefinedType : IfcGridTypeEnum // optional
	ContainedInStructure : Array<IfcRelContainedInSpatialStructure> // inverse

    constructor(globalId : IfcGloballyUniqueId, uAxes : Array<IfcGridAxis>, vAxes : Array<IfcGridAxis>) {
        super(globalId)
		this.WAxes = new Array<IfcGridAxis>()
		this.ContainedInStructure = new Array<IfcRelContainedInSpatialStructure>()

		this.UAxes = uAxes
		this.VAxes = vAxes

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.ObjectPlacement))
		parameters.push(BaseIfc.toStepValue(this.Representation))
		parameters.push(BaseIfc.toStepValue(this.UAxes))
		parameters.push(BaseIfc.toStepValue(this.VAxes))
		parameters.push(BaseIfc.toStepValue(this.WAxes))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

            return parameters.join();
        }
}