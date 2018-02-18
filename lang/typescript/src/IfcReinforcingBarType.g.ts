
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
import {IfcReinforcingBarTypeEnum} from "./IfcReinforcingBarTypeEnum.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcReinforcingBarSurfaceEnum} from "./IfcReinforcingBarSurfaceEnum.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcReinforcingElementType} from "./IfcReinforcingElementType.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingbartype.htm
 */
export class IfcReinforcingBarType extends IfcReinforcingElementType {
	PredefinedType : IfcReinforcingBarTypeEnum
	NominalDiameter : IfcPositiveLengthMeasure // optional
	CrossSectionArea : IfcAreaMeasure // optional
	BarLength : IfcPositiveLengthMeasure // optional
	BarSurface : IfcReinforcingBarSurfaceEnum // optional
	BendingShapeCode : IfcLabel // optional
	BendingParameters : Array<IfcLengthMeasure|IfcPlaneAngleMeasure> // optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcReinforcingBarTypeEnum) {
        super(globalId)
		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ApplicableOccurrence))
		parameters.push(BaseIfc.toStepValue(this.HasPropertySets))
		parameters.push(BaseIfc.toStepValue(this.RepresentationMaps))
		parameters.push(BaseIfc.toStepValue(this.Tag))
		parameters.push(BaseIfc.toStepValue(this.ElementType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.NominalDiameter))
		parameters.push(BaseIfc.toStepValue(this.CrossSectionArea))
		parameters.push(BaseIfc.toStepValue(this.BarLength))
		parameters.push(BaseIfc.toStepValue(this.BarSurface))
		parameters.push(BaseIfc.toStepValue(this.BendingShapeCode))
		parameters.push(BaseIfc.toStepValue(this.BendingParameters))

        return parameters.join();
    }
}