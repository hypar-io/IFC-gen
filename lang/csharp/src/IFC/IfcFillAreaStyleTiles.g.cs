

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletiles.htm"/>
	/// </summary>
	public  partial class IfcFillAreaStyleTiles : IfcGeometricRepresentationItem
	{
		public List<IfcVector> TilingPattern{get;set;} 
		public List<IfcStyledItem> Tiles{get;set;} 
		public IfcPositiveRatioMeasure TilingScale{get;set;} 


		/// <summary>
		/// Construct a IfcFillAreaStyleTiles with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFillAreaStyleTiles(List<IfcVector> tilingPattern,List<IfcStyledItem> tiles,IfcPositiveRatioMeasure tilingScale):base()
		{

			TilingPattern = tilingPattern;
			Tiles = tiles;
			TilingScale = tilingScale;

		}
		public static new IfcFillAreaStyleTiles FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFillAreaStyleTiles>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(TilingPattern != null ? TilingPattern.ToStepValue() : "$");
			parameters.Add(Tiles != null ? Tiles.ToStepValue() : "$");
			parameters.Add(TilingScale != null ? TilingScale.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
