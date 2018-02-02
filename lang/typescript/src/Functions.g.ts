
import {IfcSurface} from "./IfcSurface.g"
import {IfcPcurve} from "./IfcPcurve.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcArcIndex} from "./IfcArcIndex.g"
import {IfcLineIndex} from "./IfcLineIndex.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcColourSpecification} from "./IfcColourSpecification.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"
import {IfcExternallyDefinedHatchStyle} from "./IfcExternallyDefinedHatchStyle.g"
import {IfcFillAreaStyleHatching} from "./IfcFillAreaStyleHatching.g"
import {IfcFillAreaStyleTiles} from "./IfcFillAreaStyleTiles.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcVector} from "./IfcVector.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcRationalBSplineCurveWithKnots} from "./IfcRationalBSplineCurveWithKnots.g"
import {IfcDerivedUnitElement} from "./IfcDerivedUnitElement.g"
import {IfcSIUnitName} from "./IfcSIUnitName.g"
import {IfcCompositeCurveOnSurface} from "./IfcCompositeCurveOnSurface.g"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve.g"
import {IfcEdgeLoop} from "./IfcEdgeLoop.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcMaterialLayerSet} from "./IfcMaterialLayerSet.g"
import {IfcPath} from "./IfcPath.g"
import {IfcCartesianPointList} from "./IfcCartesianPointList.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcRationalBSplineSurfaceWithKnots} from "./IfcRationalBSplineSurfaceWithKnots.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"

export class Functions
{
    
    static IfcAssociatedSurface(arg: IfcPcurve) : IfcSurface {
        throw "This function is not yet implemented."
    }

    static IfcBaseAxis(dim: number,axis1: IfcDirection,axis2: IfcDirection,axis3: IfcDirection) : Array<IfcDirection> {
        throw "This function is not yet implemented."
    }

    static IfcBooleanChoose<T>(b: boolean,choice1: T,choice2: T) : T {
        throw "This function is not yet implemented."
    }

    static IfcBuild2Axes(refDirection: IfcDirection) : Array<IfcDirection> {
        throw "This function is not yet implemented."
    }

    static IfcBuildAxes(axis: IfcDirection,refDirection: IfcDirection) : Array<IfcDirection> {
        throw "This function is not yet implemented."
    }

    static IfcConsecutiveSegments(segments: Array<IfcArcIndex|IfcLineIndex>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcConstraintsParamBSpline(degree: number,upKnots: number,upCp: number,knotMult: number,knots: IfcParameterValue) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcConvertDirectionInto2D(direction: IfcDirection) : IfcDirection {
        throw "This function is not yet implemented."
    }

    static IfcCorrectDimensions(m: IfcUnitEnum,dim: IfcDimensionalExponents) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcCorrectFillAreaStyle(styles: Array<IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcCorrectLocalPlacement(axisPlacement: IfcAxis2Placement2D|IfcAxis2Placement3D,relPlacement: IfcObjectPlacement) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcCorrectObjectAssignment(constraint: IfcObjectTypeEnum,objects: Array<IfcObjectDefinition>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcCorrectUnitAssignment(units: Array<IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcCrossProduct(arg1: IfcDirection,arg2: IfcDirection) : IfcVector {
        throw "This function is not yet implemented."
    }

    static IfcCurveDim(curve: IfcCurve) : IfcDimensionCount {
        throw "This function is not yet implemented."
    }

    static IfcCurveWeightsPositive(b: IfcRationalBSplineCurveWithKnots) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcDeriveDimensionalExponents(unitElements: Array<IfcDerivedUnitElement>) : IfcDimensionalExponents {
        throw "This function is not yet implemented."
    }

    static IfcDimensionsForSiUnit(n: IfcSIUnitName) : IfcDimensionalExponents {
        throw "This function is not yet implemented."
    }

    static IfcDotProduct(arg1: IfcDirection,arg2: IfcDirection) : number {
        throw "This function is not yet implemented."
    }

    static IfcFirstProjAxis(zAxis: IfcDirection,arg: IfcDirection) : IfcDirection {
        throw "This function is not yet implemented."
    }

    static IfcGetBasisSurface(c: IfcCompositeCurveOnSurface|IfcPcurve|IfcSurfaceCurve) : Array<IfcSurface> {
        throw "This function is not yet implemented."
    }

    static IfcListToArray<T>(lis: Array<T>,low: number,u: number) : T {
        throw "This function is not yet implemented."
    }

    static IfcLoopHeadToTail(aLoop: IfcEdgeLoop) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcMakeArrayOfArray<T>(lis: Array<Array<T>>,low1: number,u1: number,low2: number,u2: number) : Array<Array<T>> {
        throw "This function is not yet implemented."
    }

    static IfcMlsTotalThickness(layerSet: IfcMaterialLayerSet) : IfcLengthMeasure {
        throw "This function is not yet implemented."
    }

    static IfcNormalise(arg: IfcDirection|IfcVector) : IfcDirection|IfcVector {
        throw "This function is not yet implemented."
    }

    static IfcOrthogonalComplement(vec: IfcDirection) : IfcDirection {
        throw "This function is not yet implemented."
    }

    static IfcPathHeadToTail(aPath: IfcPath) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcPointListDim(pointList: IfcCartesianPointList) : IfcDimensionCount {
        throw "This function is not yet implemented."
    }

    static IfcSameAxis2Placement(ap1: IfcAxis2Placement2D|IfcAxis2Placement3D,ap2: IfcAxis2Placement2D|IfcAxis2Placement3D,epsilon: number) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcSameCartesianPoint(cp1: IfcCartesianPoint,cp2: IfcCartesianPoint,epsilon: number) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcSameDirection(dir1: IfcDirection,dir2: IfcDirection,epsilon: number) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcSameValidPrecision(epsilon1: number,epsilon2: number) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcSameValue(value1: number,value2: number,epsilon: number) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcScalarTimesVector(scalar: number,vec: IfcDirection|IfcVector) : IfcVector {
        throw "This function is not yet implemented."
    }

    static IfcSecondProjAxis(zAxis: IfcDirection,xAxis: IfcDirection,arg: IfcDirection) : IfcDirection {
        throw "This function is not yet implemented."
    }

    static IfcShapeRepresentationTypes(repType: IfcLabel,items: IfcRepresentationItem) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcSurfaceWeightsPositive(b: IfcRationalBSplineSurfaceWithKnots) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcTaperedSweptAreaProfiles(startArea: IfcProfileDef,endArea: IfcProfileDef) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcTopologyRepresentationTypes(repType: IfcLabel,items: IfcRepresentationItem) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcUniqueDefinitionNames(relations: Array<IfcRelDefinesByProperties>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcUniquePropertyName(properties: Array<IfcProperty>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcUniquePropertySetNames(properties: Array<IfcPropertySetDefinition>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcUniquePropertyTemplateNames(properties: Array<IfcPropertyTemplate>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcUniqueQuantityNames(properties: Array<IfcPhysicalQuantity>) : boolean {
        throw "This function is not yet implemented."
    }

    static IfcVectorDifference(arg1: IfcDirection|IfcVector,arg2: IfcDirection|IfcVector) : IfcVector {
        throw "This function is not yet implemented."
    }

    static IfcVectorSum(arg1: IfcDirection|IfcVector,arg2: IfcDirection|IfcVector) : IfcVector {
        throw "This function is not yet implemented."
    }
}