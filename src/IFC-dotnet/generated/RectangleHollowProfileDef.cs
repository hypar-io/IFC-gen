/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectanglehollowprofiledef.htm
	/// </summary>
	internal  partial class RectangleHollowProfileDef : RectangleProfileDef 
	{
		public Double WallThickness {get;set;}

		public Double InnerFilletRadius {get;set;}

		public Double OuterFilletRadius {get;set;}

		public RectangleHollowProfileDef(Double wallThickness,
				Double innerFilletRadius,
				Double outerFilletRadius,
				Double xDim,
				Double yDim,
				Axis2Placement2D position,
				ProfileDefHasProperties hasProperties,
				ProfileTypeEnum profileType,
				String profileName) : base(xDim,
				yDim,
				position,
				hasProperties,
				profileType,
				profileName)
		{
			this.WallThickness = wallThickness;
			this.InnerFilletRadius = innerFilletRadius;
			this.OuterFilletRadius = outerFilletRadius;
		}
	}
}