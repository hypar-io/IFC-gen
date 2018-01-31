

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertex.htm"/>
	/// </summary>
	public  partial class IfcTextureVertex : IfcPresentationItem
	{
		public List<IfcParameterValue> Coordinates{get;set;} 


		/// <summary>
		/// Construct a IfcTextureVertex with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextureVertex(List<IfcParameterValue> coordinates):base()
		{

			Coordinates = coordinates;

		}
		public static new IfcTextureVertex FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextureVertex>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Coordinates != null ? Coordinates.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
