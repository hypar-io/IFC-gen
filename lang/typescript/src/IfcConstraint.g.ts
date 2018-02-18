
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConstraintEnum} from "./IfcConstraintEnum.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraint.htm
 */
export abstract class IfcConstraint extends BaseIfc {
	Name : IfcLabel
	Description : IfcText // optional
	ConstraintGrade : IfcConstraintEnum
	ConstraintSource : IfcLabel // optional
	CreatingActor : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	CreationTime : IfcDateTime // optional
	UserDefinedGrade : IfcLabel // optional
	HasExternalReferences : Array<IfcExternalReferenceRelationship> // inverse
	PropertiesForConstraint : Array<IfcResourceConstraintRelationship> // inverse

    constructor(name : IfcLabel, constraintGrade : IfcConstraintEnum) {
        super()
		this.Name = name
		this.ConstraintGrade = constraintGrade

    }
}