
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcProcess} from "./IfcProcess.g"
import {IfcLagTime} from "./IfcLagTime.g"
import {IfcSequenceEnum} from "./IfcSequenceEnum.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelsequence.htm
 */
export class IfcRelSequence extends IfcRelConnects {
	RelatingProcess : IfcProcess
	RelatedProcess : IfcProcess
	TimeLag : IfcLagTime // optional
	SequenceType : IfcSequenceEnum // optional
	UserDefinedSequenceType : IfcLabel // optional

    constructor(globalId : IfcGloballyUniqueId, relatingProcess : IfcProcess, relatedProcess : IfcProcess) {
        super(globalId)
		this.RelatingProcess = relatingProcess
		this.RelatedProcess = relatedProcess

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingProcess))
		parameters.push(BaseIfc.toStepValue(this.RelatedProcess))
		parameters.push(BaseIfc.toStepValue(this.TimeLag))
		parameters.push(BaseIfc.toStepValue(this.SequenceType))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedSequenceType))

        return parameters.join();
    }
}