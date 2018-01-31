

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturemap.htm"/>
	/// </summary>
	public  partial class IfcTextureMap : IfcTextureCoordinate
	{
		public List<IfcTextureVertex> Vertices{get;set;} 
		public IfcFace MappedTo{get;set;} 


		/// <summary>
		/// Construct a IfcTextureMap with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextureMap(List<IfcSurfaceTexture> maps,List<IfcTextureVertex> vertices,IfcFace mappedTo):base(maps)
		{

			Vertices = vertices;
			MappedTo = mappedTo;

		}
		public static new IfcTextureMap FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextureMap>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Maps != null ? Maps.ToStepValue() : "$");
			parameters.Add(Vertices != null ? Vertices.ToStepValue() : "$");
			parameters.Add(MappedTo != null ? MappedTo.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
