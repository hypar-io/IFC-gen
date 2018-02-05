
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet.g"
import {IfcCardinalPointReference} from "./IfcCardinalPointReference.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcMaterialUsageDefinition} from "./IfcMaterialUsageDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusage.htm
 */
export class IfcMaterialProfileSetUsage extends IfcMaterialUsageDefinition {
	ForProfileSet : IfcMaterialProfileSet
	CardinalPoint : IfcCardinalPointReference // optional
	ReferenceExtent : IfcPositiveLengthMeasure // optional

    constructor(forProfileSet : IfcMaterialProfileSet) {
        super()

		this.ForProfileSet = forProfileSet

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.ForProfileSet))
		parameters.push(BaseIfc.toStepValue(this.CardinalPoint))
		parameters.push(BaseIfc.toStepValue(this.ReferenceExtent))

            return parameters.join();
        }
}