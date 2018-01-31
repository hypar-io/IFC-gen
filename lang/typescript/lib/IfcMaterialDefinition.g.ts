
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcMaterial} from "./IfcMaterial"
import {IfcMaterialConstituent} from "./IfcMaterialConstituent"
import {IfcMaterialConstituentSet} from "./IfcMaterialConstituentSet"
import {IfcMaterialLayer} from "./IfcMaterialLayer"
import {IfcMaterialLayerSet} from "./IfcMaterialLayerSet"
import {IfcMaterialProfile} from "./IfcMaterialProfile"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet"

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