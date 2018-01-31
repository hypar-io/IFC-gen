

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinate.htm"/>
	/// </summary>
	public abstract partial class IfcTextureCoordinate : IfcPresentationItem
	{
		public List<IfcSurfaceTexture> Maps{get;set;} 


		/// <summary>
		/// Construct a IfcTextureCoordinate with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextureCoordinate(List<IfcSurfaceTexture> maps):base()
		{

			Maps = maps;

		}
		public static new IfcTextureCoordinate FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextureCoordinate>(json); }

	}
}
