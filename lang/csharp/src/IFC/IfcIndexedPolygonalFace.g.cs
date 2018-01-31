

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolygonalface.htm"/>
	/// </summary>
	public  partial class IfcIndexedPolygonalFace : IfcTessellatedItem
	{
		public List<IfcPositiveInteger> CoordIndex{get;set;} 
		public List<IfcPolygonalFaceSet> ToFaceSet{get;set;} // inverse


		/// <summary>
		/// Construct a IfcIndexedPolygonalFace with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIndexedPolygonalFace(List<IfcPositiveInteger> coordIndex):base()
		{
			ToFaceSet = new List<IfcPolygonalFaceSet>();

			CoordIndex = coordIndex;

		}
		public static new IfcIndexedPolygonalFace FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIndexedPolygonalFace>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CoordIndex != null ? CoordIndex.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
