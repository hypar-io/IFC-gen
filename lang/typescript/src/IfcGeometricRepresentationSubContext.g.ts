
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcReal} from "./IfcReal.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation.g"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcGeometricProjectionEnum} from "./IfcGeometricProjectionEnum.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationsubcontext.htm
 */
export class IfcGeometricRepresentationSubContext extends IfcGeometricRepresentationContext {
	ParentContext : IfcGeometricRepresentationContext
	TargetScale : IfcPositiveRatioMeasure // optional
	TargetView : IfcGeometricProjectionEnum
	UserDefinedTargetView : IfcLabel // optional

    get WorldCoordinateSystem() : IfcAxis2Placement2D|IfcAxis2Placement3D{throw "Derived property logic has not been implemented for WorldCoordinateSystem."} // derived
    set WorldCoordinateSystem(value : IfcAxis2Placement2D|IfcAxis2Placement3D){super.WorldCoordinateSystem = value}

    get CoordinateSpaceDimension() : IfcDimensionCount{throw "Derived property logic has not been implemented for CoordinateSpaceDimension."} // derived
    set CoordinateSpaceDimension(value : IfcDimensionCount){super.CoordinateSpaceDimension = value}

    get TrueNorth() : IfcDirection{throw "Derived property logic has not been implemented for TrueNorth."} // derived
    set TrueNorth(value : IfcDirection){super.TrueNorth = value}

    get Precision() : IfcReal{throw "Derived property logic has not been implemented for Precision."} // derived
    set Precision(value : IfcReal){super.Precision = value}

    constructor(coordinateSpaceDimension : IfcDimensionCount, worldCoordinateSystem : IfcAxis2Placement2D|IfcAxis2Placement3D, parentContext : IfcGeometricRepresentationContext, targetView : IfcGeometricProjectionEnum) {
        super(coordinateSpaceDimension,worldCoordinateSystem)

		this.ParentContext = parentContext
		this.TargetView = targetView

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ContextIdentifier != null ? BaseIfc.toStepValue(this.ContextIdentifier) : "$");
		parameters.push(this.ContextType != null ? BaseIfc.toStepValue(this.ContextType) : "$");
		parameters.push("*");
		parameters.push("*");
		parameters.push("*");
		parameters.push("*");
		parameters.push(this.ParentContext != null ? BaseIfc.toStepValue(this.ParentContext) : "$");
		parameters.push(this.TargetScale != null ? BaseIfc.toStepValue(this.TargetScale) : "$");
		parameters.push(BaseIfc.toStepValue(this.TargetView));
		parameters.push(this.UserDefinedTargetView != null ? BaseIfc.toStepValue(this.UserDefinedTargetView) : "$");

        return parameters.join();
    }
}