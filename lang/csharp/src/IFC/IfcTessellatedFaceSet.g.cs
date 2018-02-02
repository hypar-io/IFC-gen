

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctessellatedfaceset.htm"/>
	/// </summary>
	public abstract partial class IfcTessellatedFaceSet : IfcTessellatedItem
	{
		public IfcCartesianPointList3D Coordinates{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived
		public List<IfcIndexedColourMap> HasColours{get;set;} // inverse
		public List<IfcIndexedTextureMap> HasTextures{get;set;} // inverse


		/// <summary>
		/// Construct a IfcTessellatedFaceSet with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTessellatedFaceSet(IfcCartesianPointList3D coordinates):base()
		{
			HasColours = new List<IfcIndexedColourMap>();
			HasTextures = new List<IfcIndexedTextureMap>();

			Coordinates = coordinates;

		}
		public static new IfcTessellatedFaceSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTessellatedFaceSet>(json); }

	}
}
