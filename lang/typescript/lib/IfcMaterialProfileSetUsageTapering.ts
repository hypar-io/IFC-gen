
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet"
import {IfcCardinalPointReference} from "./IfcCardinalPointReference"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcMaterialProfileSetUsage} from "./IfcMaterialProfileSetUsage"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusagetapering.htm
export class IfcMaterialProfileSetUsageTapering extends IfcMaterialProfileSetUsage {
	ForProfileEndSet : IfcMaterialProfileSet
	CardinalEndPoint : IfcCardinalPointReference// optional

    constructor(forProfileSet : IfcMaterialProfileSet, forProfileEndSet : IfcMaterialProfileSet) {
        super(forProfileSet)

		this.ForProfileEndSet = forProfileEndSet

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ForProfileSet != null ? this.toStepValue(this.ForProfileSet) : "$");
		parameters.push(this.CardinalPoint != null ? this.toStepValue(this.CardinalPoint) : "$");
		parameters.push(this.ReferenceExtent != null ? this.toStepValue(this.ReferenceExtent) : "$");
		parameters.push(this.ForProfileEndSet != null ? this.toStepValue(this.ForProfileEndSet) : "$");
		parameters.push(this.CardinalEndPoint != null ? this.toStepValue(this.CardinalEndPoint) : "$");

        return parameters.join();
    }
}