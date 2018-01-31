

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerwithstyle.htm"/>
	/// </summary>
	public  partial class IfcPresentationLayerWithStyle : IfcPresentationLayerAssignment
	{
		public IfcLogical LayerOn{get;set;} 
		public IfcLogical LayerFrozen{get;set;} 
		public IfcLogical LayerBlocked{get;set;} 
		public List<IfcPresentationStyle> LayerStyles{get;set;} 


		/// <summary>
		/// Construct a IfcPresentationLayerWithStyle with all required attributes.
		/// </summary>
		public IfcPresentationLayerWithStyle(IfcLabel name,List<IfcLayeredItem> assignedItems,IfcLogical layerOn,IfcLogical layerFrozen,IfcLogical layerBlocked,List<IfcPresentationStyle> layerStyles):base(name,assignedItems)
		{

			LayerOn = layerOn;
			LayerFrozen = layerFrozen;
			LayerBlocked = layerBlocked;
			LayerStyles = layerStyles;

		}
		/// <summary>
		/// Construct a IfcPresentationLayerWithStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPresentationLayerWithStyle(IfcLabel name,IfcText description,List<IfcLayeredItem> assignedItems,IfcIdentifier identifier,IfcLogical layerOn,IfcLogical layerFrozen,IfcLogical layerBlocked,List<IfcPresentationStyle> layerStyles):base(name,description,assignedItems,identifier)
		{

			LayerOn = layerOn;
			LayerFrozen = layerFrozen;
			LayerBlocked = layerBlocked;
			LayerStyles = layerStyles;

		}
		public static new IfcPresentationLayerWithStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPresentationLayerWithStyle>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(AssignedItems != null ? AssignedItems.ToStepValue() : "$");
			parameters.Add(Identifier != null ? Identifier.ToStepValue() : "$");
			parameters.Add(LayerOn != null ? LayerOn.ToStepValue() : "$");
			parameters.Add(LayerFrozen != null ? LayerFrozen.ToStepValue() : "$");
			parameters.Add(LayerBlocked != null ? LayerBlocked.ToStepValue() : "$");
			parameters.Add(LayerStyles != null ? LayerStyles.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
