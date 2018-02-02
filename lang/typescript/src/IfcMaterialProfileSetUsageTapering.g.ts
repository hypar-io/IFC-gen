
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet.g"
import {IfcCardinalPointReference} from "./IfcCardinalPointReference.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcMaterialProfileSetUsage} from "./IfcMaterialProfileSetUsage.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusagetapering.htm
 */
export class IfcMaterialProfileSetUsageTapering extends IfcMaterialProfileSetUsage {
	ForProfileEndSet : IfcMaterialProfileSet
	CardinalEndPoint : IfcCardinalPointReference // optional

    constructor(forProfileSet : IfcMaterialProfileSet, forProfileEndSet : IfcMaterialProfileSet) {
        super(forProfileSet)

		this.ForProfileEndSet = forProfileEndSet

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ForProfileSet != null ? BaseIfc.toStepValue(this.ForProfileSet) : "$");
		parameters.push(this.CardinalPoint != null ? BaseIfc.toStepValue(this.CardinalPoint) : "$");
		parameters.push(this.ReferenceExtent != null ? BaseIfc.toStepValue(this.ReferenceExtent) : "$");
		parameters.push(this.ForProfileEndSet != null ? BaseIfc.toStepValue(this.ForProfileEndSet) : "$");
		parameters.push(this.CardinalEndPoint != null ? BaseIfc.toStepValue(this.CardinalEndPoint) : "$");

        return parameters.join();
    }
}