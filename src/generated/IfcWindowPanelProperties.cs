/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcWindowPanelProperties : IfcPreDefinedPropertySet 
	{
		public IfcWindowPanelProperties(IfcShapeAspect shapeAspectStyle,
				IfcWindowPanelOperationEnum operationType,
				Boolean operationTypeSpecified,
				IfcWindowPanelPositionEnum panelPosition,
				Boolean panelPositionSpecified,
				Double frameDepth,
				Boolean frameDepthSpecified,
				Double frameThickness,
				Boolean frameThicknessSpecified) : base()
		{
			this.shapeAspectStyleField = shapeAspectStyle;
			this.operationTypeField = operationType;
			this.operationTypeSpecifiedField = operationTypeSpecified;
			this.panelPositionField = panelPosition;
			this.panelPositionSpecifiedField = panelPositionSpecified;
			this.frameDepthField = frameDepth;
			this.frameDepthSpecifiedField = frameDepthSpecified;
			this.frameThicknessField = frameThickness;
			this.frameThicknessSpecifiedField = frameThicknessSpecified;
		}
	}
}