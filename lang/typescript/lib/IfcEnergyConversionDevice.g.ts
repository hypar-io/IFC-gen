
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
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelFillsElement} from "./IfcRelFillsElement"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements"
import {IfcRelConnectsPortToElement} from "./IfcRelConnectsPortToElement"
import {IfcRelFlowControlElements} from "./IfcRelFlowControlElements"
import {IfcAirToAirHeatRecovery} from "./IfcAirToAirHeatRecovery"
import {IfcBoiler} from "./IfcBoiler"
import {IfcBurner} from "./IfcBurner"
import {IfcChiller} from "./IfcChiller"
import {IfcCoil} from "./IfcCoil"
import {IfcCondenser} from "./IfcCondenser"
import {IfcCooledBeam} from "./IfcCooledBeam"
import {IfcCoolingTower} from "./IfcCoolingTower"
import {IfcElectricGenerator} from "./IfcElectricGenerator"
import {IfcElectricMotor} from "./IfcElectricMotor"
import {IfcEngine} from "./IfcEngine"
import {IfcEvaporativeCooler} from "./IfcEvaporativeCooler"
import {IfcEvaporator} from "./IfcEvaporator"
import {IfcHeatExchanger} from "./IfcHeatExchanger"
import {IfcHumidifier} from "./IfcHumidifier"
import {IfcMotorConnection} from "./IfcMotorConnection"
import {IfcSolarDevice} from "./IfcSolarDevice"
import {IfcTransformer} from "./IfcTransformer"
import {IfcTubeBundle} from "./IfcTubeBundle"
import {IfcUnitaryEquipment} from "./IfcUnitaryEquipment"
import {IfcDistributionFlowElement} from "./IfcDistributionFlowElement"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenergyconversiondevice.htm
export class IfcEnergyConversionDevice extends IfcDistributionFlowElement {

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
		parameters.push(this.Tag != null ? this.toStepValue(this.Tag) : "$");

        return parameters.join();
    }
}