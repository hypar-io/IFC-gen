
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet"
import {IfcCardinalPointReference} from "./IfcCardinalPointReference"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcMaterialProfileSetUsageTapering} from "./IfcMaterialProfileSetUsageTapering"
import {IfcMaterialUsageDefinition} from "./IfcMaterialUsageDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusage.htm
export class IfcMaterialProfileSetUsage extends IfcMaterialUsageDefinition {
	ForProfileSet : IfcMaterialProfileSet
	CardinalPoint : IfcCardinalPointReference// optional
	ReferenceExtent : IfcPositiveLengthMeasure// optional

    constructor(forProfileSet : IfcMaterialProfileSet) {
        super()

		this.ForProfileSet = forProfileSet

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ForProfileSet != null ? this.toStepValue(this.ForProfileSet) : "$");
		parameters.push(this.CardinalPoint != null ? this.toStepValue(this.CardinalPoint) : "$");
		parameters.push(this.ReferenceExtent != null ? this.toStepValue(this.ReferenceExtent) : "$");

        return parameters.join();
    }
}