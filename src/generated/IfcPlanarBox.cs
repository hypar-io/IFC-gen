/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcPlanarBox : IfcPlanarExtent 
	{
		public IfcPlanarBox(IfcPlanarBoxPlacement placement,
				Double sizeInX,
				Boolean sizeInXSpecified,
				Double sizeInY,
				Boolean sizeInYSpecified,
				IfcStyledItem styledByItem) : base(sizeInX,
				sizeInXSpecified,
				sizeInY,
				sizeInYSpecified,
				styledByItem)
		{
			this.placementField = placement;
		}
	}
}