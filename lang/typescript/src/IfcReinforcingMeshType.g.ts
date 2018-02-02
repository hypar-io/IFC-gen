
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
import {IfcReinforcingMeshTypeEnum} from "./IfcReinforcingMeshTypeEnum.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcReinforcingElementType} from "./IfcReinforcingElementType.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmeshtype.htm
 */
export class IfcReinforcingMeshType extends IfcReinforcingElementType {
	PredefinedType : IfcReinforcingMeshTypeEnum
	MeshLength : IfcPositiveLengthMeasure // optional
	MeshWidth : IfcPositiveLengthMeasure // optional
	LongitudinalBarNominalDiameter : IfcPositiveLengthMeasure // optional
	TransverseBarNominalDiameter : IfcPositiveLengthMeasure // optional
	LongitudinalBarCrossSectionArea : IfcAreaMeasure // optional
	TransverseBarCrossSectionArea : IfcAreaMeasure // optional
	LongitudinalBarSpacing : IfcPositiveLengthMeasure // optional
	TransverseBarSpacing : IfcPositiveLengthMeasure // optional
	BendingShapeCode : IfcLabel // optional
	BendingParameters : Array<IfcLengthMeasure|IfcPlaneAngleMeasure> // optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcReinforcingMeshTypeEnum) {
        super(globalId)
		this.BendingParameters = new Array<IfcLengthMeasure|IfcPlaneAngleMeasure>()

		this.PredefinedType = predefinedType

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
		parameters.push(this.ElementType != null ? BaseIfc.toStepValue(this.ElementType) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(this.MeshLength != null ? BaseIfc.toStepValue(this.MeshLength) : "$");
		parameters.push(this.MeshWidth != null ? BaseIfc.toStepValue(this.MeshWidth) : "$");
		parameters.push(this.LongitudinalBarNominalDiameter != null ? BaseIfc.toStepValue(this.LongitudinalBarNominalDiameter) : "$");
		parameters.push(this.TransverseBarNominalDiameter != null ? BaseIfc.toStepValue(this.TransverseBarNominalDiameter) : "$");
		parameters.push(this.LongitudinalBarCrossSectionArea != null ? BaseIfc.toStepValue(this.LongitudinalBarCrossSectionArea) : "$");
		parameters.push(this.TransverseBarCrossSectionArea != null ? BaseIfc.toStepValue(this.TransverseBarCrossSectionArea) : "$");
		parameters.push(this.LongitudinalBarSpacing != null ? BaseIfc.toStepValue(this.LongitudinalBarSpacing) : "$");
		parameters.push(this.TransverseBarSpacing != null ? BaseIfc.toStepValue(this.TransverseBarSpacing) : "$");
		parameters.push(this.BendingShapeCode != null ? BaseIfc.toStepValue(this.BendingShapeCode) : "$");
		parameters.push(this.BendingParameters != null ? BaseIfc.toStepValue(this.BendingParameters) : "$");

        return parameters.join();
    }
}