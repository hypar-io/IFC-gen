

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerset.htm"/>
	/// </summary>
	public  partial class IfcMaterialLayerSet : IfcMaterialDefinition
	{
		public List<IfcMaterialLayer> MaterialLayers{get;set;} 
		public IfcLabel LayerSetName{get;set;} // optional
		public IfcText Description{get;set;} // optional

        [JsonIgnore]
        public IfcLengthMeasure TotalThickness{get{throw new NotImplementedException($"Derived property logic has been implemented for TotalThickness.");}} // derived


		/// <summary>
		/// Construct a IfcMaterialLayerSet with all required attributes.
		/// </summary>
		public IfcMaterialLayerSet(List<IfcMaterialLayer> materialLayers):base()
		{

			MaterialLayers = materialLayers;

		}
		/// <summary>
		/// Construct a IfcMaterialLayerSet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialLayerSet(List<IfcMaterialLayer> materialLayers,IfcLabel layerSetName,IfcText description):base()
		{

			MaterialLayers = materialLayers;
			LayerSetName = layerSetName;
			Description = description;

		}
		public static new IfcMaterialLayerSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialLayerSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(MaterialLayers != null ? MaterialLayers.ToStepValue() : "$");
			parameters.Add(LayerSetName != null ? LayerSetName.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
