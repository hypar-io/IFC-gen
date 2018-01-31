
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcConstraintEnum} from "./IfcConstraintEnum"
import {IfcActorSelect} from "./IfcActorSelect"
import {IfcDateTime} from "./IfcDateTime"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"
import {IfcMetric} from "./IfcMetric"
import {IfcObjective} from "./IfcObjective"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraint.htm
export abstract class IfcConstraint extends BaseIfc {
	Name : IfcLabel
	Description : IfcText// optional
	ConstraintGrade : IfcConstraintEnum
	ConstraintSource : IfcLabel// optional
	CreatingActor : IfcActorSelect// optional
	CreationTime : IfcDateTime// optional
	UserDefinedGrade : IfcLabel// optional
	HasExternalReferences : Array<IfcExternalReferenceRelationship>// inverse
	PropertiesForConstraint : Array<IfcResourceConstraintRelationship>// inverse

    constructor(name : IfcLabel, constraintGrade : IfcConstraintEnum) {
        super()
		this.HasExternalReferences = new Array<IfcExternalReferenceRelationship>()
		this.PropertiesForConstraint = new Array<IfcResourceConstraintRelationship>()

		this.Name = name
		this.ConstraintGrade = constraintGrade

    }
}