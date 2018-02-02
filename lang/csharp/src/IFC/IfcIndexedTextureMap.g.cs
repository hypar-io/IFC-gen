

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtexturemap.htm"/>
	/// </summary>
	public abstract partial class IfcIndexedTextureMap : IfcTextureCoordinate
	{
		public IfcTessellatedFaceSet MappedTo{get;set;} 
		public IfcTextureVertexList TexCoords{get;set;} 


		/// <summary>
		/// Construct a IfcIndexedTextureMap with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIndexedTextureMap(List<IfcSurfaceTexture> maps,IfcTessellatedFaceSet mappedTo,IfcTextureVertexList texCoords):base(maps)
		{

			MappedTo = mappedTo;
			TexCoords = texCoords;

		}
		public static new IfcIndexedTextureMap FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIndexedTextureMap>(json); }

	}
}
