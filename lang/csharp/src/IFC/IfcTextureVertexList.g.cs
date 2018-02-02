

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertexlist.htm"/>
	/// </summary>
	public  partial class IfcTextureVertexList : IfcPresentationItem
	{
		public List<List<IfcParameterValue>> TexCoordsList{get;set;} 


		/// <summary>
		/// Construct a IfcTextureVertexList with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextureVertexList(List<List<IfcParameterValue>> texCoordsList):base()
		{

			TexCoordsList = texCoordsList;

		}
		public static new IfcTextureVertexList FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextureVertexList>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(TexCoordsList != null ? TexCoordsList.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
