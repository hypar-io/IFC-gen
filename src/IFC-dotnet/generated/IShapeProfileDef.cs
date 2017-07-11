/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcishapeprofiledef.htm
	/// </summary>
	internal  partial class IShapeProfileDef : ParameterizedProfileDef 
	{
		public Double OverallWidth {get;set;}

		public Double OverallDepth {get;set;}

		public Double WebThickness {get;set;}

		public Double FlangeThickness {get;set;}

		public Double FilletRadius {get;set;}

		public Double FlangeEdgeRadius {get;set;}

		public Double FlangeSlope {get;set;}

		public IShapeProfileDef(Double overallWidth,
				Double overallDepth,
				Double webThickness,
				Double flangeThickness,
				Double filletRadius,
				Double flangeEdgeRadius,
				Double flangeSlope,
				Axis2Placement2D position,
				ProfileDefHasProperties hasProperties,
				ProfileTypeEnum profileType,
				String profileName) : base(position,
				hasProperties,
				profileType,
				profileName)
		{
			this.OverallWidth = overallWidth;
			this.OverallDepth = overallDepth;
			this.WebThickness = webThickness;
			this.FlangeThickness = flangeThickness;
			this.FilletRadius = filletRadius;
			this.FlangeEdgeRadius = flangeEdgeRadius;
			this.FlangeSlope = flangeSlope;
		}
	}
}