

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcface.htm"/>
	/// </summary>
	public  partial class IfcFace : IfcTopologicalRepresentationItem
	{
		public List<IfcFaceBound> Bounds{get;set;} 
		public List<IfcTextureMap> HasTextureMaps{get;set;} // inverse


		/// <summary>
		/// Construct a IfcFace with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFace(List<IfcFaceBound> bounds):base()
		{
			HasTextureMaps = new List<IfcTextureMap>();

			Bounds = bounds;

		}
		public static new IfcFace FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFace>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Bounds != null ? Bounds.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
