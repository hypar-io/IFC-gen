
using System;
using System.Collections.Generic;

namespace IFC4
{
    public static class Functions
    {
        
        public static List<IfcDirection> IfcBaseAxis(int dim,IfcDirection axis1,IfcDirection axis2,IfcDirection axis3)
        {
            throw new NotImplementedException();
        }

        public static T IfcBooleanChoose<T>(bool b,T choice1,T choice2)
        {
            throw new NotImplementedException();
        }

        public static List<IfcDirection> IfcBuild2Axes(IfcDirection refDirection)
        {
            throw new NotImplementedException();
        }

        public static List<IfcDirection> IfcBuildAxes(IfcDirection axis,IfcDirection refDirection)
        {
            throw new NotImplementedException();
        }

        public static bool IfcConstraintsParamBSpline(int degree,int upKnots,int upCp,int knotMult,IfcParameterValue knots)
        {
            throw new NotImplementedException();
        }

        public static IfcDirection IfcConvertDirectionInto2D(IfcDirection direction)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcCorrectDimensions(IfcUnitEnum m,IfcDimensionalExponents dim)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcCorrectFillAreaStyle(List<IfcFillStyleSelect> styles)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcCorrectLocalPlacement(IfcAxis2Placement axisPlacement,IfcObjectPlacement relPlacement)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcCorrectObjectAssignment(IfcObjectTypeEnum constraint,List<IfcObjectDefinition> objects)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcCorrectUnitAssignment(List<IfcUnit> units)
        {
            throw new NotImplementedException();
        }

        public static IfcVector IfcCrossProduct(IfcDirection arg1,IfcDirection arg2)
        {
            throw new NotImplementedException();
        }

        public static IfcDimensionCount IfcCurveDim(IfcCurve curve)
        {
            throw new NotImplementedException();
        }

        public static bool IfcCurveWeightsPositive(IfcRationalBSplineCurveWithKnots b)
        {
            throw new NotImplementedException();
        }

        public static IfcDimensionalExponents IfcDeriveDimensionalExponents(List<IfcDerivedUnitElement> unitElements)
        {
            throw new NotImplementedException();
        }

        public static IfcDimensionalExponents IfcDimensionsForSiUnit(IfcSIUnitName n)
        {
            throw new NotImplementedException();
        }

        public static double IfcDotProduct(IfcDirection arg1,IfcDirection arg2)
        {
            throw new NotImplementedException();
        }

        public static IfcDirection IfcFirstProjAxis(IfcDirection zAxis,IfcDirection arg)
        {
            throw new NotImplementedException();
        }

        public static List<IfcSurface> IfcGetBasisSurface(IfcCurveOnSurface c)
        {
            throw new NotImplementedException();
        }

        public static T IfcListToArray<T>(List<T> lis,int low,int u)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcLoopHeadToTail(IfcEdgeLoop aLoop)
        {
            throw new NotImplementedException();
        }

        public static List<List<T>> IfcMakeArrayOfArray<T>(List<List<T>> lis,int low1,int u1,int low2,int u2)
        {
            throw new NotImplementedException();
        }

        public static IfcLengthMeasure IfcMlsTotalThickness(IfcMaterialLayerSet layerSet)
        {
            throw new NotImplementedException();
        }

        public static IfcVectorOrDirection IfcNormalise(IfcVectorOrDirection arg)
        {
            throw new NotImplementedException();
        }

        public static IfcDirection IfcOrthogonalComplement(IfcDirection vec)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcPathHeadToTail(IfcPath aPath)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcSameAxis2Placement(IfcAxis2Placement ap1,IfcAxis2Placement ap2,double epsilon)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcSameCartesianPoint(IfcCartesianPoint cp1,IfcCartesianPoint cp2,double epsilon)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcSameDirection(IfcDirection dir1,IfcDirection dir2,double epsilon)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcSameValidPrecision(double epsilon1,double epsilon2)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcSameValue(double value1,double value2,double epsilon)
        {
            throw new NotImplementedException();
        }

        public static IfcVector IfcScalarTimesVector(double scalar,IfcVectorOrDirection vec)
        {
            throw new NotImplementedException();
        }

        public static IfcDirection IfcSecondProjAxis(IfcDirection zAxis,IfcDirection xAxis,IfcDirection arg)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcShapeRepresentationTypes(IfcLabel repType,IfcRepresentationItem items)
        {
            throw new NotImplementedException();
        }

        public static bool IfcSurfaceWeightsPositive(IfcRationalBSplineSurfaceWithKnots b)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcTaperedSweptAreaProfiles(IfcProfileDef startArea,IfcProfileDef endArea)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcTopologyRepresentationTypes(IfcLabel repType,IfcRepresentationItem items)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcUniquePropertyName(List<IfcProperty> properties)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcUniquePropertyTemplateNames(List<IfcPropertyTemplate> properties)
        {
            throw new NotImplementedException();
        }

        public static bool? IfcUniqueQuantityNames(List<IfcPhysicalQuantity> properties)
        {
            throw new NotImplementedException();
        }

        public static IfcVector IfcVectorDifference(IfcVectorOrDirection arg1,IfcVectorOrDirection arg2)
        {
            throw new NotImplementedException();
        }

        public static IfcVector IfcVectorSum(IfcVectorOrDirection arg1,IfcVectorOrDirection arg2)
        {
            throw new NotImplementedException();
        }

    }
}