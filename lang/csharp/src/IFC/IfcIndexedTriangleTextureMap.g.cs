

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtriangletexturemap.htm"/>
	/// </summary>
	public  partial class IfcIndexedTriangleTextureMap : IfcIndexedTextureMap
	{
		public List<List<IfcPositiveInteger>> TexCoordIndex{get;set;} // optional


		/// <summary>
		/// Construct a IfcIndexedTriangleTextureMap with all required attributes.
		/// </summary>
		public IfcIndexedTriangleTextureMap(List<IfcSurfaceTexture> maps,IfcTessellatedFaceSet mappedTo,IfcTextureVertexList texCoords):base(maps,mappedTo,texCoords)
		{
			TexCoordIndex = new List<List<IfcPositiveInteger>>();


		}
		/// <summary>
		/// Construct a IfcIndexedTriangleTextureMap with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIndexedTriangleTextureMap(List<IfcSurfaceTexture> maps,IfcTessellatedFaceSet mappedTo,IfcTextureVertexList texCoords,List<List<IfcPositiveInteger>> texCoordIndex):base(maps,mappedTo,texCoords)
		{

			TexCoordIndex = texCoordIndex;

		}
		public static new IfcIndexedTriangleTextureMap FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIndexedTriangleTextureMap>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Maps != null ? Maps.ToStepValue() : "$");
			parameters.Add(MappedTo != null ? MappedTo.ToStepValue() : "$");
			parameters.Add(TexCoords != null ? TexCoords.ToStepValue() : "$");
			parameters.Add(TexCoordIndex != null ? TexCoordIndex.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
