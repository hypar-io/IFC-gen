/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcParameterizedProfileDef : IfcProfileDef 
	{
		public IfcParameterizedProfileDef(IfcAxis2Placement2D position,
				IfcProfileDefHasProperties hasProperties,
				IfcProfileTypeEnum profileType,
				Boolean profileTypeSpecified,
				String profileName) : base(hasProperties,
				profileType,
				profileTypeSpecified,
				profileName)
		{
			this.positionField = position;
		}
	}
}