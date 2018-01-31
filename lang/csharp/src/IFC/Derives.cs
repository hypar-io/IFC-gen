using System;
using System.Collections.Generic;
using System.Linq;

namespace IFC
{
    /*public partial class IfcAxis1Placement
    {
        public IfcDirection Z
        {
            get{return Functions.NVL();}
        }
    }

    public partial class IfcAxis2Placement2D
    {
        public List<List<IfcDirection>> P
        {
            get{return Functions.IfcBuild2Axes(RefDirection);}
        }
    }

    public partial class IfcAxis2Placement3D
    {
        public List<List<IfcDirection>> P
        {
            get{return Functions.IfcBuildAxes(Axis, RefDirection);}
        }
    }

    public partial class IfcBoundingBox
    {
        public IfcDimensionCount Dim
        {
            get{return 3;}
        }
    }

    public partial class IfcBSplineCurve
    {
        public int UpperIndexOnControlPoints
        {
            get{return ControlPointsList.Count;}
        }

        public List<IfcCartesianPoint> ControlPoints
        {
            get{return Functions.IfcListToArray(ControlPointsList, 0, UpperIndexOnControlPoints);}
        }
    }

    public partial class IfcBSplineCurveWithKnots
    {
        public int UpperIndexOnKnots
        {
            get{return Knots.Count;}
        }
    }

    public partial class IfcBSplineSurface
    {
        public int UUpper
        {
            get{return ControlPointsList.Count - 1;}
        }

        public int VUpper
        {
            get{return ControlPointsList.ElementAt(1).Count - 1;}
        }

        public List<List<List<IfcCartesianPoint>>> ControlPoints
        {
            get{return Functions.IfcMakeArrayOfArray(ControlPointsList, 0,UUpper,0,VUpper);}
        }
    }

    public partial class IfcBSplineSurfaceWithKnots
    {
        public int KnotVUpper
        {
            get{return VKnots.Count;}
        }

        public int KnotUUpper
        {
            get{return UKnots.Count;}
        }
    }

    public partial class IfcBooleanResult
    {
        public IfcDimensionCount Dim
        {
            get{return FirstOperand.Dim;}
        }

        public bool SameDim()
        {
            return FirstOperand.Dim == SecondOperand.Dim;
        }
    }

    public partial class IfcCartesianPoint
    {
        public IfcDimensionCount Dim
        {
            get{return Functions.HIINDEX(Coordinates);}
        }
    }

    public partial class IfcCartesianTransformationOperator
    {
        public double Scl
        {
            get{return Functions.NVL(Scale, 1.0);}
        }

        public IfcDimensionCount Dim
        {
            get{return LocalOrigin.Dim;}
        }
    }*/
}