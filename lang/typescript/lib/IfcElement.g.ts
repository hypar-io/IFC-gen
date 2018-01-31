
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
import {IfcBuildingElement} from "./IfcBuildingElement"
import {IfcCivilElement} from "./IfcCivilElement"
import {IfcDistributionElement} from "./IfcDistributionElement"
import {IfcElementAssembly} from "./IfcElementAssembly"
import {IfcElementComponent} from "./IfcElementComponent"
import {IfcFeatureElement} from "./IfcFeatureElement"
import {IfcFurnishingElement} from "./IfcFurnishingElement"
import {IfcGeographicElement} from "./IfcGeographicElement"
import {IfcTransportElement} from "./IfcTransportElement"
import {IfcVirtualElement} from "./IfcVirtualElement"
import {IfcProduct} from "./IfcProduct"

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