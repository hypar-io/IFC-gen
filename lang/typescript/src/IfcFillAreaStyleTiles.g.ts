
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVector} from "./IfcVector.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletiles.htm
 */
export class IfcFillAreaStyleTiles extends IfcGeometricRepresentationItem {
	TilingPattern : Array<IfcVector>
	Tiles : Array<IfcStyledItem>
	TilingScale : IfcPositiveRatioMeasure

    constructor(tilingPattern : Array<IfcVector>, tiles : Array<IfcStyledItem>, tilingScale : IfcPositiveRatioMeasure) {
        super()
		this.TilingPattern = tilingPattern
		this.Tiles = tiles
		this.TilingScale = tilingScale

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.TilingPattern))
		parameters.push(BaseIfc.toStepValue(this.Tiles))
		parameters.push(BaseIfc.toStepValue(this.TilingScale))

        return parameters.join();
    }
}