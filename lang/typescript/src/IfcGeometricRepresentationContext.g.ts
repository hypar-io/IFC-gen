
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcReal} from "./IfcReal.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcGeometricRepresentationSubContext} from "./IfcGeometricRepresentationSubContext.g"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation.g"
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationcontext.htm
 */
export class IfcGeometricRepresentationContext extends IfcRepresentationContext {
	CoordinateSpaceDimension : IfcDimensionCount
	Precision : IfcReal // optional
	WorldCoordinateSystem : IfcAxis2Placement2D|IfcAxis2Placement3D
	TrueNorth : IfcDirection // optional
	HasSubContexts : Array<IfcGeometricRepresentationSubContext> // inverse
	HasCoordinateOperation : Array<IfcCoordinateOperation> // inverse

    constructor(coordinateSpaceDimension : IfcDimensionCount, worldCoordinateSystem : IfcAxis2Placement2D|IfcAxis2Placement3D) {
        super()
		this.HasSubContexts = new Array<IfcGeometricRepresentationSubContext>()
		this.HasCoordinateOperation = new Array<IfcCoordinateOperation>()

		this.CoordinateSpaceDimension = coordinateSpaceDimension
		this.WorldCoordinateSystem = worldCoordinateSystem

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.ContextIdentifier))
		parameters.push(BaseIfc.toStepValue(this.ContextType))
		parameters.push(BaseIfc.toStepValue(this.CoordinateSpaceDimension))
		parameters.push(BaseIfc.toStepValue(this.Precision))
		parameters.push(BaseIfc.toStepValue(this.WorldCoordinateSystem))
		parameters.push(BaseIfc.toStepValue(this.TrueNorth))

            return parameters.join();
        }
}