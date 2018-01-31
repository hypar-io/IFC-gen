
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcProcess} from "./IfcProcess"
import {IfcLagTime} from "./IfcLagTime"
import {IfcSequenceEnum} from "./IfcSequenceEnum"
import {IfcRelConnects} from "./IfcRelConnects"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelsequence.htm
export class IfcRelSequence extends IfcRelConnects {
	RelatingProcess : IfcProcess
	RelatedProcess : IfcProcess
	TimeLag : IfcLagTime// optional
	SequenceType : IfcSequenceEnum// optional
	UserDefinedSequenceType : IfcLabel// optional

    constructor(globalId : IfcGloballyUniqueId, relatingProcess : IfcProcess, relatedProcess : IfcProcess) {
        super(globalId)

		this.RelatingProcess = relatingProcess
		this.RelatedProcess = relatedProcess

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingProcess != null ? this.toStepValue(this.RelatingProcess) : "$");
		parameters.push(this.RelatedProcess != null ? this.toStepValue(this.RelatedProcess) : "$");
		parameters.push(this.TimeLag != null ? this.toStepValue(this.TimeLag) : "$");
		parameters.push(this.toStepValue(this.SequenceType));
		parameters.push(this.UserDefinedSequenceType != null ? this.toStepValue(this.UserDefinedSequenceType) : "$");

        return parameters.join();
    }
}