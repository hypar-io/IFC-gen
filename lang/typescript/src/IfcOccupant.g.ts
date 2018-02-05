
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
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcRelAssignsToActor} from "./IfcRelAssignsToActor.g"
import {IfcOccupantTypeEnum} from "./IfcOccupantTypeEnum.g"
import {IfcActor} from "./IfcActor.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoccupant.htm
 */
export class IfcOccupant extends IfcActor {
	PredefinedType : IfcOccupantTypeEnum // optional

    constructor(globalId : IfcGloballyUniqueId, theActor : IfcOrganization|IfcPerson|IfcPersonAndOrganization) {
        super(globalId,theActor)

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.TheActor))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

            return parameters.join();
        }
}