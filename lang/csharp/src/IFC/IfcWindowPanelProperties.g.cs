

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowpanelproperties.htm"/>
	/// </summary>
	public  partial class IfcWindowPanelProperties : IfcPreDefinedPropertySet
	{
		public IfcWindowPanelOperationEnum OperationType{get;set;} 
		public IfcWindowPanelPositionEnum PanelPosition{get;set;} 
		public IfcPositiveLengthMeasure FrameDepth{get;set;} // optional
		public IfcPositiveLengthMeasure FrameThickness{get;set;} // optional
		public IfcShapeAspect ShapeAspectStyle{get;set;} // optional


		/// <summary>
		/// Construct a IfcWindowPanelProperties with all required attributes.
		/// </summary>
		public IfcWindowPanelProperties(IfcGloballyUniqueId globalId,IfcWindowPanelOperationEnum operationType,IfcWindowPanelPositionEnum panelPosition):base(globalId)
		{

			OperationType = operationType;
			PanelPosition = panelPosition;

		}
		/// <summary>
		/// Construct a IfcWindowPanelProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWindowPanelProperties(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcWindowPanelOperationEnum operationType,IfcWindowPanelPositionEnum panelPosition,IfcPositiveLengthMeasure frameDepth,IfcPositiveLengthMeasure frameThickness,IfcShapeAspect shapeAspectStyle):base(globalId,ownerHistory,name,description)
		{

			OperationType = operationType;
			PanelPosition = panelPosition;
			FrameDepth = frameDepth;
			FrameThickness = frameThickness;
			ShapeAspectStyle = shapeAspectStyle;

		}
		public static new IfcWindowPanelProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWindowPanelProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(OperationType.ToStepValue());
			parameters.Add(PanelPosition.ToStepValue());
			parameters.Add(FrameDepth != null ? FrameDepth.ToStepValue() : "$");
			parameters.Add(FrameThickness != null ? FrameThickness.ToStepValue() : "$");
			parameters.Add(ShapeAspectStyle != null ? ShapeAspectStyle.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
