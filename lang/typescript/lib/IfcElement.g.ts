
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
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelFillsElement} from "./IfcRelFillsElement.g"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements.g"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements.g"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement.g"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements.g"
import {IfcBuildingElement} from "./IfcBuildingElement.g"
import {IfcCivilElement} from "./IfcCivilElement.g"
import {IfcDistributionElement} from "./IfcDistributionElement.g"
import {IfcElementAssembly} from "./IfcElementAssembly.g"
import {IfcElementComponent} from "./IfcElementComponent.g"
import {IfcFeatureElement} from "./IfcFeatureElement.g"
import {IfcFurnishingElement} from "./IfcFurnishingElement.g"
import {IfcGeographicElement} from "./IfcGeographicElement.g"
import {IfcTransportElement} from "./IfcTransportElement.g"
import {IfcVirtualElement} from "./IfcVirtualElement.g"
import {IfcProduct} from "./IfcProduct.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelement.htm
export abstract class IfcElement extends IfcProduct {
	Tag : IfcIdentifier// optional
	FillsVoids : Array<IfcRelFillsElement>// inverse
	ConnectedTo : Array<IfcRelConnectsElements>// inverse
	IsInterferedByElements : Array<IfcRelInterferesElements>// inverse
	InterferesElements : Array<IfcRelInterferesElements>// inverse
	HasProjections : Array<IfcRelProjectsElement>// inverse
	ReferencedInStructures : Array<IfcRelReferencedInSpatialStructure>// inverse
	HasOpenings : Array<IfcRelVoidsElement>// inverse
	IsConnectionRealization : Array<IfcRelConnectsWithRealizingElements>// inverse
	ProvidesBoundaries : Array<IfcRelSpaceBoundary>// inverse
	ConnectedFrom : Array<IfcRelConnectsElements>// inverse
	ContainedInStructure : Array<IfcRelContainedInSpatialStructure>// inverse
	HasCoverings : Array<IfcRelCoversBldgElements>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.FillsVoids = new Array<IfcRelFillsElement>()
		this.ConnectedTo = new Array<IfcRelConnectsElements>()
		this.IsInterferedByElements = new Array<IfcRelInterferesElements>()
		this.InterferesElements = new Array<IfcRelInterferesElements>()
		this.HasProjections = new Array<IfcRelProjectsElement>()
		this.ReferencedInStructures = new Array<IfcRelReferencedInSpatialStructure>()
		this.HasOpenings = new Array<IfcRelVoidsElement>()
		this.IsConnectionRealization = new Array<IfcRelConnectsWithRealizingElements>()
		this.ProvidesBoundaries = new Array<IfcRelSpaceBoundary>()
		this.ConnectedFrom = new Array<IfcRelConnectsElements>()
		this.ContainedInStructure = new Array<IfcRelContainedInSpatialStructure>()
		this.HasCoverings = new Array<IfcRelCoversBldgElements>()

    }
}