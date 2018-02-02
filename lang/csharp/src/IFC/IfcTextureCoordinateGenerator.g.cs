

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinategenerator.htm"/>
	/// </summary>
	public  partial class IfcTextureCoordinateGenerator : IfcTextureCoordinate
	{
		public IfcLabel Mode{get;set;} 
		public List<IfcReal> Parameter{get;set;} // optional


		/// <summary>
		/// Construct a IfcTextureCoordinateGenerator with all required attributes.
		/// </summary>
		public IfcTextureCoordinateGenerator(List<IfcSurfaceTexture> maps,IfcLabel mode):base(maps)
		{
			Parameter = new List<IfcReal>();

			Mode = mode;

		}
		/// <summary>
		/// Construct a IfcTextureCoordinateGenerator with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextureCoordinateGenerator(List<IfcSurfaceTexture> maps,IfcLabel mode,List<IfcReal> parameter):base(maps)
		{

			Mode = mode;
			Parameter = parameter;

		}
		public static new IfcTextureCoordinateGenerator FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextureCoordinateGenerator>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Maps != null ? Maps.ToStepValue() : "$");
			parameters.Add(Mode != null ? Mode.ToStepValue() : "$");
			parameters.Add(Parameter != null ? Parameter.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
