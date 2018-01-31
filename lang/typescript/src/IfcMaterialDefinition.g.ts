
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcMaterial} from "./IfcMaterial.g"
import {IfcMaterialConstituent} from "./IfcMaterialConstituent.g"
import {IfcMaterialConstituentSet} from "./IfcMaterialConstituentSet.g"
import {IfcMaterialLayer} from "./IfcMaterialLayer.g"
import {IfcMaterialLayerSet} from "./IfcMaterialLayerSet.g"
import {IfcMaterialProfile} from "./IfcMaterialProfile.g"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinition.htm
export abstract class IfcMaterialDefinition extends BaseIfc {
	AssociatedTo : Array<IfcRelAssociatesMaterial>// inverse
	HasExternalReferences : Array<IfcExternalReferenceRelationship>// inverse
	HasProperties : Array<IfcMaterialProperties>// inverse

    constructor() {
        super()
		this.AssociatedTo = new Array<IfcRelAssociatesMaterial>()
		this.HasExternalReferences = new Array<IfcExternalReferenceRelationship>()
		this.HasProperties = new Array<IfcMaterialProperties>()

    }
}