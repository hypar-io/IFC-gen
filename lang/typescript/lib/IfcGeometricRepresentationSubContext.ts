
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcRepresentation} from "./IfcRepresentation"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcReal} from "./IfcReal"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcDirection} from "./IfcDirection"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure"
import {IfcGeometricProjectionEnum} from "./IfcGeometricProjectionEnum"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationsubcontext.htm
export class IfcGeometricRepresentationSubContext extends IfcGeometricRepresentationContext {
	ParentContext : IfcGeometricRepresentationContext
	TargetScale : IfcPositiveRatioMeasure// optional
	TargetView : IfcGeometricProjectionEnum
	UserDefinedTargetView : IfcLabel// optional

    get WorldCoordinateSystem() : IfcAxis2Placement{throw "Derived property logic has been implemented for WorldCoordinateSystem."} // derived

    get CoordinateSpaceDimension() : IfcDimensionCount{throw "Derived property logic has been implemented for CoordinateSpaceDimension."} // derived

    get TrueNorth() : IfcDirection{throw "Derived property logic has been implemented for TrueNorth."} // derived

    get Precision() : IfcReal{throw "Derived property logic has been implemented for Precision."} // derived

    constructor(coordinateSpaceDimension : IfcDimensionCount, worldCoordinateSystem : IfcAxis2Placement, parentContext : IfcGeometricRepresentationContext, targetView : IfcGeometricProjectionEnum) {
        super(coordinateSpaceDimension,worldCoordinateSystem)

		this.ParentContext = parentContext
		this.TargetView = targetView

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ContextIdentifier != null ? this.toStepValue(this.ContextIdentifier) : "$");
		parameters.push(this.ContextType != null ? this.toStepValue(this.ContextType) : "$");
		parameters.push("*");
		parameters.push("*");
		parameters.push("*");
		parameters.push("*");
		parameters.push(this.ParentContext != null ? this.toStepValue(this.ParentContext) : "$");
		parameters.push(this.TargetScale != null ? this.toStepValue(this.TargetScale) : "$");
		parameters.push(this.toStepValue(this.TargetView));
		parameters.push(this.UserDefinedTargetView != null ? this.toStepValue(this.UserDefinedTargetView) : "$");

        return parameters.join();
    }
}