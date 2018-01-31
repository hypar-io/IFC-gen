
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLabel} from "./IfcLabel"
import {IfcColourRgb} from "./IfcColourRgb"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcLightSourceAmbient} from "./IfcLightSourceAmbient"
import {IfcLightSourceDirectional} from "./IfcLightSourceDirectional"
import {IfcLightSourceGoniometric} from "./IfcLightSourceGoniometric"
import {IfcLightSourcePositional} from "./IfcLightSourcePositional"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsource.htm
export abstract class IfcLightSource extends IfcGeometricRepresentationItem {
	Name : IfcLabel// optional
	LightColour : IfcColourRgb
	AmbientIntensity : IfcNormalisedRatioMeasure// optional
	Intensity : IfcNormalisedRatioMeasure// optional

    constructor(lightColour : IfcColourRgb) {
        super()

		this.LightColour = lightColour

    }
}