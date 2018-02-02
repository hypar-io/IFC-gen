

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylewithtextures.htm"/>
	/// </summary>
	public  partial class IfcSurfaceStyleWithTextures : IfcPresentationItem
	{
		public List<IfcSurfaceTexture> Textures{get;set;} 


		/// <summary>
		/// Construct a IfcSurfaceStyleWithTextures with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceStyleWithTextures(List<IfcSurfaceTexture> textures):base()
		{

			Textures = textures;

		}
		public static new IfcSurfaceStyleWithTextures FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceStyleWithTextures>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Textures != null ? Textures.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
