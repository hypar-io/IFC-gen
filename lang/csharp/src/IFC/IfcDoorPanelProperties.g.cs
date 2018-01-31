

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorpanelproperties.htm"/>
	/// </summary>
	public  partial class IfcDoorPanelProperties : IfcPreDefinedPropertySet
	{
		public IfcPositiveLengthMeasure PanelDepth{get;set;} // optional
		public IfcDoorPanelOperationEnum PanelOperation{get;set;} 
		public IfcNormalisedRatioMeasure PanelWidth{get;set;} // optional
		public IfcDoorPanelPositionEnum PanelPosition{get;set;} 
		public IfcShapeAspect ShapeAspectStyle{get;set;} // optional


		/// <summary>
		/// Construct a IfcDoorPanelProperties with all required attributes.
		/// </summary>
		public IfcDoorPanelProperties(IfcGloballyUniqueId globalId,IfcDoorPanelOperationEnum panelOperation,IfcDoorPanelPositionEnum panelPosition):base(globalId)
		{

			PanelOperation = panelOperation;
			PanelPosition = panelPosition;

		}
		/// <summary>
		/// Construct a IfcDoorPanelProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDoorPanelProperties(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcPositiveLengthMeasure panelDepth,IfcDoorPanelOperationEnum panelOperation,IfcNormalisedRatioMeasure panelWidth,IfcDoorPanelPositionEnum panelPosition,IfcShapeAspect shapeAspectStyle):base(globalId,ownerHistory,name,description)
		{

			PanelDepth = panelDepth;
			PanelOperation = panelOperation;
			PanelWidth = panelWidth;
			PanelPosition = panelPosition;
			ShapeAspectStyle = shapeAspectStyle;

		}
		public static new IfcDoorPanelProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDoorPanelProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(PanelDepth != null ? PanelDepth.ToStepValue() : "$");
			parameters.Add(PanelOperation.ToStepValue());
			parameters.Add(PanelWidth != null ? PanelWidth.ToStepValue() : "$");
			parameters.Add(PanelPosition.ToStepValue());
			parameters.Add(ShapeAspectStyle != null ? ShapeAspectStyle.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
