
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcRepresentation} from "./IfcRepresentation"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcReal} from "./IfcReal"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcDirection} from "./IfcDirection"
import {IfcGeometricRepresentationSubContext} from "./IfcGeometricRepresentationSubContext"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation"
import {IfcRepresentationContext} from "./IfcRepresentationContext"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationcontext.htm
export class IfcGeometricRepresentationContext extends IfcRepresentationContext {
	CoordinateSpaceDimension : IfcDimensionCount
	Precision : IfcReal// optional
	WorldCoordinateSystem : IfcAxis2Placement
	TrueNorth : IfcDirection// optional
	HasSubContexts : Array<IfcGeometricRepresentationSubContext>// inverse
	HasCoordinateOperation : Array<IfcCoordinateOperation>// inverse

    constructor(coordinateSpaceDimension : IfcDimensionCount, worldCoordinateSystem : IfcAxis2Placement) {
        super()
		this.HasSubContexts = new Array<IfcGeometricRepresentationSubContext>()
		this.HasCoordinateOperation = new Array<IfcCoordinateOperation>()

		this.CoordinateSpaceDimension = coordinateSpaceDimension
		this.WorldCoordinateSystem = worldCoordinateSystem

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ContextIdentifier != null ? this.toStepValue(this.ContextIdentifier) : "$");
		parameters.push(this.ContextType != null ? this.toStepValue(this.ContextType) : "$");
		parameters.push(this.CoordinateSpaceDimension != null ? this.toStepValue(this.CoordinateSpaceDimension) : "$");
		parameters.push(this.Precision != null ? this.toStepValue(this.Precision) : "$");
		parameters.push(this.WorldCoordinateSystem != null ? this.toStepValue(this.WorldCoordinateSystem) : "$");
		parameters.push(this.TrueNorth != null ? this.toStepValue(this.TrueNorth) : "$");

        return parameters.join();
    }
}